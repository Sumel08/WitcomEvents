package witcomevents

import static org.springframework.http.HttpStatus.*
import grails.transaction.Transactional

import grails.plugin.springsecurity.annotation.Secured
import grails.converters.JSON

@Transactional(readOnly = true)
class SocialNetworksController {

    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond SocialNetworks.list(params), model:[socialNetworksCount: SocialNetworks.count()]
    }

    def show(SocialNetworks socialNetworks) {
        respond socialNetworks
    }

    def create() {
        respond new SocialNetworks(params)
    }

    @Transactional
    def save(SocialNetworks socialNetworks) {
        if (socialNetworks == null) {
            transactionStatus.setRollbackOnly()
            notFound()
            return
        }

        if (socialNetworks.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond socialNetworks.errors, view:'create'
            return
        }

        socialNetworks.save flush:true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.created.message', args: [message(code: 'socialNetworks.label', default: 'SocialNetworks'), socialNetworks.id])
                redirect socialNetworks
            }
            '*' { respond socialNetworks, [status: CREATED] }
        }
    }

    def edit(SocialNetworks socialNetworks) {
        respond socialNetworks
    }

    @Transactional
    def update(SocialNetworks socialNetworks) {
        if (socialNetworks == null) {
            transactionStatus.setRollbackOnly()
            notFound()
            return
        }

        if (socialNetworks.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond socialNetworks.errors, view:'edit'
            return
        }

        socialNetworks.save flush:true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.updated.message', args: [message(code: 'socialNetworks.label', default: 'SocialNetworks'), socialNetworks.id])
                redirect socialNetworks
            }
            '*'{ respond socialNetworks, [status: OK] }
        }
    }

    @Transactional
    def delete(SocialNetworks socialNetworks) {

        if (socialNetworks == null) {
            transactionStatus.setRollbackOnly()
            notFound()
            return
        }

        socialNetworks.delete flush:true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.deleted.message', args: [message(code: 'socialNetworks.label', default: 'SocialNetworks'), socialNetworks.id])
                redirect action:"index", method:"GET"
            }
            '*'{ render status: NO_CONTENT }
        }
    }

    protected void notFound() {
        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.not.found.message', args: [message(code: 'socialNetworks.label', default: 'SocialNetworks'), params.id])
                redirect action: "index", method: "GET"
            }
            '*'{ render status: NOT_FOUND }
        }
    }

    @Secured(['permitAll'])
    def getSocialNetworks() {

        ArrayList<String> nothing = new ArrayList<>()

        try {
        
            ArrayList<Integer> socialId = new ArrayList<>()

            def event = Event.findByCode(params.id)
            def people = People.findAllByEvent(event)
            def peopleSocialNetworks = PeopleSocialNetworks.findAllByPeopleInList(people)

            def placeCategories = PlaceCategory.findAllByEvent(event)
            def places = Place.findAllByPlaceCategoryInList(placeCategories)
            def placeSocialNetworks = PlaceSocialNetworks.findAllByPlaceInList(places)

            socialId.add(peopleSocialNetworks.socialNetworks.id)
            socialId.add(placeSocialNetworks.socialNetworks.id)

            def socialNetworks = SocialNetworks.findAllByIdInList(socialId)

            render socialNetworks as JSON
        } catch (Exception e) {
            println(e)
            render nothing as JSON
        }
    }
}
