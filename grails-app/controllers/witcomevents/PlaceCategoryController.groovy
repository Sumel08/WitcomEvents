package witcomevents

import static org.springframework.http.HttpStatus.*
import grails.transaction.Transactional

@Transactional(readOnly = true)
class PlaceCategoryController {

    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond PlaceCategory.list(params), model:[placeCategoryCount: PlaceCategory.count()]
    }

    def show(PlaceCategory placeCategory) {
        respond placeCategory
    }

    def create() {
        respond new PlaceCategory(params)
    }

    @Transactional
    def save(PlaceCategory placeCategory) {
        if (placeCategory == null) {
            transactionStatus.setRollbackOnly()
            notFound()
            return
        }

        if (placeCategory.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond placeCategory.errors, view:'create'
            return
        }

        placeCategory.save flush:true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.created.message', args: [message(code: 'placeCategory.label', default: 'PlaceCategory'), placeCategory.id])
                redirect placeCategory
            }
            '*' { respond placeCategory, [status: CREATED] }
        }
    }

    def edit(PlaceCategory placeCategory) {
        respond placeCategory
    }

    @Transactional
    def update(PlaceCategory placeCategory) {
        if (placeCategory == null) {
            transactionStatus.setRollbackOnly()
            notFound()
            return
        }

        if (placeCategory.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond placeCategory.errors, view:'edit'
            return
        }

        placeCategory.save flush:true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.updated.message', args: [message(code: 'placeCategory.label', default: 'PlaceCategory'), placeCategory.id])
                redirect placeCategory
            }
            '*'{ respond placeCategory, [status: OK] }
        }
    }

    @Transactional
    def delete(PlaceCategory placeCategory) {

        if (placeCategory == null) {
            transactionStatus.setRollbackOnly()
            notFound()
            return
        }

        placeCategory.delete flush:true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.deleted.message', args: [message(code: 'placeCategory.label', default: 'PlaceCategory'), placeCategory.id])
                redirect action:"index", method:"GET"
            }
            '*'{ render status: NO_CONTENT }
        }
    }

    protected void notFound() {
        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.not.found.message', args: [message(code: 'placeCategory.label', default: 'PlaceCategory'), params.id])
                redirect action: "index", method: "GET"
            }
            '*'{ render status: NOT_FOUND }
        }
    }
}
