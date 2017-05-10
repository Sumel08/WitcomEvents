package witcomevents

import static org.springframework.http.HttpStatus.*
import grails.transaction.Transactional

import grails.plugin.springsecurity.annotation.Secured

import grails.converters.JSON

@Transactional(readOnly = true)
class ImagesController {

    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond Images.list(params), model:[imagesCount: Images.count()]
    }

    def show(Images images) {
        respond images
    }

    def create() {
        respond new Images(params)
    }

    @Transactional
    def save(Images images) {
        if (images == null) {
            transactionStatus.setRollbackOnly()
            notFound()
            return
        }

        if (images.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond images.errors, view:'create'
            return
        }

        images.save flush:true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.created.message', args: [message(code: 'images.label', default: 'Images'), images.id])
                redirect images
            }
            '*' { respond images, [status: CREATED] }
        }
    }

    def edit(Images images) {
        respond images
    }

    @Transactional
    def update(Images images) {
        if (images == null) {
            transactionStatus.setRollbackOnly()
            notFound()
            return
        }

        if (images.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond images.errors, view:'edit'
            return
        }

        images.save flush:true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.updated.message', args: [message(code: 'images.label', default: 'Images'), images.id])
                redirect images
            }
            '*'{ respond images, [status: OK] }
        }
    }

    @Transactional
    def delete(Images images) {

        if (images == null) {
            transactionStatus.setRollbackOnly()
            notFound()
            return
        }

        images.delete flush:true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.deleted.message', args: [message(code: 'images.label', default: 'Images'), images.id])
                redirect action:"index", method:"GET"
            }
            '*'{ render status: NO_CONTENT }
        }
    }

    protected void notFound() {
        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.not.found.message', args: [message(code: 'images.label', default: 'Images'), params.id])
                redirect action: "index", method: "GET"
            }
            '*'{ render status: NOT_FOUND }
        }
    }

    @Secured(['ROLE_USER'])
    def images() {

        println(params)

        def filename = "images/" + params.id + "." + params.format
        println(filename)

        File eventImage = new File(filename)

        InputStream targetStream = new FileInputStream(eventImage);

        render file: targetStream, contentType: 'image/' + params.format

        //render "some text"
    }

    @Secured(['permitAll'])
    def getImages() {
        def images = Images.findAll()

        render images as JSON
    }

    @Secured(['permitAll'])
    def getImage() {
        def image = Images.findById(params.id)

        render image as JSON
    }
}
