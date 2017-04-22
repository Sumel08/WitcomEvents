package witcomevents

import static org.springframework.http.HttpStatus.*
import grails.transaction.Transactional

import grails.plugin.springsecurity.annotation.Secured

import java.text.DateFormat
import java.text.SimpleDateFormat

import grails.converters.JSON

@Transactional(readOnly = false)
class EventController {

    def springSecurityService

    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond Event.list(params), model:[eventCount: Event.count()]
    }

    def show(Event event) {
        respond event
    }

    def create() {
        //respond new Event(params)
        [test: 'Test Create Event']
    }

    @Transactional
    def save() {
        /*if (event == null) {
            transactionStatus.setRollbackOnly()
            notFound()
            return
        }

        if (event.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond event.errors, view:'create'
            return
        }

        event.save flush:true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.created.message', args: [message(code: 'event.label', default: 'Event'), event.id])
                redirect event
            }
            '*' { respond event, [status: CREATED] }
        }*/

        print(params)

        User user = new User()
        user.username = params.username
        user.password = params.password
        user.email = params.email
        user.firstName = params.eventName
        user.lastName = params.eventName

        if(!user.save()){
            user.errors.allErrors.each{
                println(it)
            }
        }

        Event event = new Event()
        event.name = params.eventName
        event.code = params.eventCode

        def startDate = params.startDate.split("T")
        def startTime = startDate[1].split(":")
        startDate = startDate[0] + " " + startTime[0] + ":" + startTime[1]

        def endDate = params.endDate.split("T")
        def endTime = endDate[1].split(":")
        endDate = endDate[0] + " " + endTime[0] + ":" + endTime[1]
        
        DateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm")
        startDate = format.parse(startDate)
        endDate = format.parse(endDate)

        event.startDate = startDate
        event.endDate = endDate
        event.eventUser = user
        event.description = 'New Event'

        if(!event.save()){
            event.errors.allErrors.each{
                println(it)
            }
        }

        def schedule = new Schedule()
        schedule.event = event

        if(!schedule.save()){
            schedule.errors.allErrors.each{
                println(it)
            }
        }

        event.schedule = schedule

        if(!event.save()){
            event.errors.allErrors.each{
                println(it)
            }
        }

        Role role = Role.findByAuthority('ROLE_USER')

        UserRole.create user, role

        render 'acá'
    }

    def edit(Event event) {
        respond event
    }

    @Transactional
    def update(Event event) {
        if (event == null) {
            transactionStatus.setRollbackOnly()
            notFound()
            return
        }

        if (event.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond event.errors, view:'edit'
            return
        }

        event.save flush:true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.updated.message', args: [message(code: 'event.label', default: 'Event'), event.id])
                redirect event
            }
            '*'{ respond event, [status: OK] }
        }
    }

    @Transactional
    def delete(Event event) {

        if (event == null) {
            transactionStatus.setRollbackOnly()
            notFound()
            return
        }

        event.delete flush:true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.deleted.message', args: [message(code: 'event.label', default: 'Event'), event.id])
                redirect action:"index", method:"GET"
            }
            '*'{ render status: NO_CONTENT }
        }
    }

    protected void notFound() {
        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.not.found.message', args: [message(code: 'event.label', default: 'Event'), params.id])
                redirect action: "index", method: "GET"
            }
            '*'{ render status: NOT_FOUND }
        }
    }

    @Secured(['ROLE_USER'])
    def eventInfo() {

        print('Event Info')
        def user = springSecurityService.currentUser
        def event = Event.findByEventUser(user)

        [event: event, user: user]
    }

    @Secured(['ROLE_USER'])
    def editEvent() {

        print('Edit Event')
        def user = springSecurityService.currentUser
        def event = Event.findByEventUser(user)

        def places = Place.findAll()
        def people = People.findAll()

        [places: places, event: event, people: people, user: user]
    }

    @Secured(['ROLE_USER'])
    def updateEvent() {
        println(params)

        def user = springSecurityService.currentUser
        def event = Event.findByEventUser(user)
        
        
        Chairs.findAllByEvent(event)*.delete()

        if (params.flag == "0") {

            event.code = params.eventCode
            event.description = params.description
            event.name = params.eventName

            println(params.startDate)
            def startDate = params.startDate.split("T")
            def startTime = startDate[1].split(":")
            startDate = startDate[0] + " " + startTime[0] + ":" + startTime[1]

            def endDate = params.endDate.split("T")
            def endTime = endDate[1].split(":")
            endDate = endDate[0] + " " + endTime[0] + ":" + endTime[1]
            
            DateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm")
            startDate = format.parse(startDate)
            endDate = format.parse(endDate)

            event.startDate = startDate
            event.endDate = endDate

            def place = Place.findById(params.place)
            event.place = place

            println('before')
            params.chairs.each {
                def chair = new Chairs()
                chair.event = event
                chair.people = People.findById(it)

                if(!chair.save()){
                    println('Algo pasó')
                }
            }
            println('after')

            try {

                def something = request.getFile("eventPhoto")


                println(params.eventPhoto.filename)

                File eventImage = new File("images/" + params.eventPhoto.filename)

                //something.transferTo(eventImage)
                FileOutputStream fos = new FileOutputStream(eventImage);
                fos.write(something.getBytes());

                println(eventImage.absolutePath)

                //InputStream targetStream = new FileInputStream(eventImage);

                //render file: targetStream, contentType: 'image/png'

                if(!event.eventImage)
                    event.eventImage = new Images()

                event.eventImage.url = "/images/images/" + params.eventPhoto.filename
            } catch (FileNotFoundException e) {

            } finally {
                println('Guardando')
            if (!event.save()) {
                event.errors.allErrors.each {
                        println(it)
                    }
                }
            }
        } else {
            
            if(!event.place)
                event.place = new Place()

            ////PLACE FOR CHAIR////
            def place = event.place
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

            if(!event.save()) {
                event.errors.allErrors.each {
                    println(it)
                }
            }

            ///////////////////////
        }

        redirect(action: "editEvent")
    }

    @Secured(['permitAll'])
    def getEvent() {
        def event = Event.findById(params.id)

        render event as JSON
    }

    @Secured(['permitAll'])
    def getEvents() {
        def event = Event.findAll()

        render event as JSON
    }
}
