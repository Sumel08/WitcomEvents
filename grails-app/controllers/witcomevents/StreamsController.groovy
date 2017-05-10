package witcomevents

import static org.springframework.http.HttpStatus.*
import grails.transaction.Transactional

import grails.plugin.springsecurity.annotation.Secured
import grails.converters.JSON

@Transactional(readOnly = true)
class StreamsController {

    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond Streams.list(params), model:[streamsCount: Streams.count()]
    }

    def show(Streams streams) {
        respond streams
    }

    def create() {
        respond new Streams(params)
    }

    @Transactional
    def save(Streams streams) {
        if (streams == null) {
            transactionStatus.setRollbackOnly()
            notFound()
            return
        }

        if (streams.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond streams.errors, view:'create'
            return
        }

        streams.save flush:true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.created.message', args: [message(code: 'streams.label', default: 'Streams'), streams.id])
                redirect streams
            }
            '*' { respond streams, [status: CREATED] }
        }
    }

    def edit(Streams streams) {
        respond streams
    }

    @Transactional
    def update(Streams streams) {
        if (streams == null) {
            transactionStatus.setRollbackOnly()
            notFound()
            return
        }

        if (streams.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond streams.errors, view:'edit'
            return
        }

        streams.save flush:true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.updated.message', args: [message(code: 'streams.label', default: 'Streams'), streams.id])
                redirect streams
            }
            '*'{ respond streams, [status: OK] }
        }
    }

    @Transactional
    def delete(Streams streams) {

        if (streams == null) {
            transactionStatus.setRollbackOnly()
            notFound()
            return
        }

        streams.delete flush:true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.deleted.message', args: [message(code: 'streams.label', default: 'Streams'), streams.id])
                redirect action:"index", method:"GET"
            }
            '*'{ render status: NO_CONTENT }
        }
    }

    protected void notFound() {
        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.not.found.message', args: [message(code: 'streams.label', default: 'Streams'), params.id])
                redirect action: "index", method: "GET"
            }
            '*'{ render status: NOT_FOUND }
        }
    }

    @Secured(['permitAll'])
    def getStreams() {

        ArrayList<String> nothing = new ArrayList<>()

        try {
            def streams = Streams.findAllByEvent(Event.findByCode(params.id))

            render streams as JSON
        } catch (Exception e) {
            println(e)
            render nothing as JSON
        }
    }
}
