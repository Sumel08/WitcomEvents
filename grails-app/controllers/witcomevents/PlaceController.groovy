package witcomevents

import static org.springframework.http.HttpStatus.*
import grails.transaction.Transactional

import grails.plugin.springsecurity.annotation.Secured

import grails.converters.JSON

@Transactional(readOnly = false)
class PlaceController {

    def springSecurityService

    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond Place.list(params), model:[placeCount: Place.count()]
    }

    def show(Place place) {
        respond place
    }

    def create() {
        respond new Place(params)
    }

    @Transactional
    def save(Place place) {
        if (place == null) {
            transactionStatus.setRollbackOnly()
            notFound()
            return
        }

        if (place.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond place.errors, view:'create'
            return
        }

        place.save flush:true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.created.message', args: [message(code: 'place.label', default: 'Place'), place.id])
                redirect place
            }
            '*' { respond place, [status: CREATED] }
        }
    }

    def edit(Place place) {
        respond place
    }

    @Transactional
    def update(Place place) {
        if (place == null) {
            transactionStatus.setRollbackOnly()
            notFound()
            return
        }

        if (place.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond place.errors, view:'edit'
            return
        }

        place.save flush:true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.updated.message', args: [message(code: 'place.label', default: 'Place'), place.id])
                redirect place
            }
            '*'{ respond place, [status: OK] }
        }
    }

    @Transactional
    def delete(Place place) {

        if (place == null) {
            transactionStatus.setRollbackOnly()
            notFound()
            return
        }

        place.delete flush:true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.deleted.message', args: [message(code: 'place.label', default: 'Place'), place.id])
                redirect action:"index", method:"GET"
            }
            '*'{ render status: NO_CONTENT }
        }
    }

    protected void notFound() {
        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.not.found.message', args: [message(code: 'place.label', default: 'Place'), params.id])
                redirect action: "index", method: "GET"
            }
            '*'{ render status: NOT_FOUND }
        }
    }

    @Secured(['ROLE_USER'])
    def places() {

        def user = springSecurityService.currentUser
        def event = Event.findByEventUser(user)

        def places = Place.findAllByPlaceCategoryInList(PlaceCategory.findAllByEvent(event))

        [places: places, user: user]
    }

    @Secured(['ROLE_USER'])
    def createPlace() {

        def user = springSecurityService.currentUser
        def event = Event.findByEventUser(user)
        def placeCategories = PlaceCategory.findAllByEvent(event)

        [placeCategories: placeCategories, user: user]
    }

    @Secured(['ROLE_USER'])
    def savePlace() {
        
        def user = springSecurityService.currentUser
        def event = Event.findByEventUser(user)

        ////PLACE FOR CHAIR////
        def place = new Place()
        place.placeName = params.placeName
        place.description = params.placeDescription
        place.telephone = params.placePhone
        place.email = params.placeEmail
        place.website = params.placeWebsite
        place.indication = params.placeIndications
        place.additionalInfo = params.placeAdditional
        place.latitude = params.latitude
        place.longitude = params.longitude
        place.altitude = params.altitude
        place.placeCategory = PlaceCategory.findByIdAndEvent(params.placeCategory, event)

        ////PHOTO FOR PLACE////
        try {

            def placeImage = request.getFile("placeImage")


            println(params.placeImage.filename)

            File placePhoto = new File("images/" + params.placeImage.filename)

            FileOutputStream fos = new FileOutputStream(placePhoto);
            fos.write(placeImage.getBytes());

            println(placePhoto.absolutePath)

            def photo = new Images()

            photo.url = "/images/images/" + params.placeImage.filename

            if (!photo.save()) {
                photo.errors.allErrors.each {
                    println(it)
                }
            }

            place.image = photo
        } catch (FileNotFoundException e) {
            println('algo pasó')
        }
        ///////////////////////
        if(!place.save()) {
            place.errors.allErrors.each {
                println(it)
            }
        }

        ///////////////////////

        redirect(action: "places")
    }

    @Secured(['ROLE_USER'])
    def editPlace() {

        def user = springSecurityService.currentUser
        def event = Event.findByEventUser(user)
        def place = Place.findById(params.id)
        def placeCategories = PlaceCategory.findAllByEvent(event)

        //VALIDAR QUE EL PLACE PERTENEZCA AL EVENT

        //////////////////////////////////////////
        [place: place, placeCategories: placeCategories, user: user]
    }

    @Secured(['ROLE_USER'])
    def updatePlace() {
        
        def user = springSecurityService.currentUser
        def event = Event.findByEventUser(user)

        //VALIDAR QUE EL PLACE PERTENEZCA AL EVENT

        //////////////////////////////////////////        

        ////PLACE FOR CHAIR////
        def place = Place.findById(params.idPlace)
        place.placeName = params.placeName
        place.description = params.placeDescription
        place.telephone = params.placePhone
        place.email = params.placeEmail
        place.website = params.placeWebsite
        place.indication = params.placeIndications
        place.additionalInfo = params.placeAdditional
        place.latitude = params.latitude
        place.longitude = params.longitude
        place.altitude = params.altitude

        def placeCategory = PlaceCategory.findByIdAndEvent(params.placeCategory, event)
        place.placeCategory = placeCategory

        ////PHOTO FOR PLACE////
        try {

            def placeImage = request.getFile("placeImage")


            println(params.placeImage.filename)

            File placePhoto = new File("images/" + params.placeImage.filename)

            FileOutputStream fos = new FileOutputStream(placePhoto);
            fos.write(placeImage.getBytes());

            println(placePhoto.absolutePath)

            def photo = new Images()

            photo.url = "/images/images/" + params.placeImage.filename

            if (!photo.save()) {
                photo.errors.allErrors.each {
                    println(it)
                }
            }

            place.image = photo
        } catch (FileNotFoundException e) {
            println('algo pasó')
        }
        ///////////////////////
        if(!place.save()) {
            place.errors.allErrors.each {
                println(it)
            }
        }

        ///////////////////////

        redirect(action: "places")
    }

    def getPlaces() {
        def places = Place.findAll()

        render places as JSON
    }
}
