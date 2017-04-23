package witcomevents

import static org.springframework.http.HttpStatus.*
import grails.transaction.Transactional

import grails.plugin.springsecurity.annotation.Secured

import grails.converters.JSON

@Transactional(readOnly = false)
class PlaceCategoryController {

    def springSecurityService

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

    @Secured(['ROLE_USER'])
    def placeCategories() {

        def user = springSecurityService.currentUser
        def event = Event.findByEventUser(user)
        def placeCategories = PlaceCategory.findAllByEvent(event)


        [placeCategories: placeCategories, user: user]
    }

    @Secured(['ROLE_USER'])
    def createPlaceCategory() {
        def user = springSecurityService.currentUser

        [user: user]
    }

    @Secured(['ROLE_USER'])
    def savePlaceCategory() {
        
        def user = springSecurityService.currentUser
        def event = Event.findByEventUser(user)

        def placeCategory = new PlaceCategory()
        placeCategory.category = params.category
        placeCategory.description = params.description
        placeCategory.event = event

        if(!placeCategory.save()) {
            placeCategory.errors.allErrors.each {
                println(it)
            }
        }
        

        redirect(action: "placeCategories")
    }

    @Secured(['ROLE_USER'])
    def editPlaceCategory() {

        def user = springSecurityService.currentUser
        def event = Event.findByEventUser(user)

        def placeCategory = PlaceCategory.findByIdAndEvent(params.id, event)


        [placeCategory: placeCategory]
    }

    @Secured(['ROLE_USER'])
    def updatePlaceCategory() {
        
        def user = springSecurityService.currentUser
        def event = Event.findByEventUser(user)

        ////PLACE FOR CHAIR////
        def placeCategory = PlaceCategory.findByIdAndEvent(params.idPlaceCategory, event)
        placeCategory.category = params.category
        placeCategory.description = params.description

        if(!placeCategory.save()) {
            placeCategory.errors.allErrors.each {
                println(it)
            }
        }

        redirect(action: "placeCategories")
    }

    @Secured(['permitAll'])
    def getPlaceCategories() {
        def placeCategories = PlaceCategory.findAll()

        render placeCategories as JSON
    }
}
