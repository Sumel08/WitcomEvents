package witcomevents

import static org.springframework.http.HttpStatus.*
import grails.transaction.Transactional

import grails.plugin.springsecurity.annotation.Secured

import java.text.DateFormat
import java.text.SimpleDateFormat

import grails.converters.JSON

@Transactional(readOnly = false)
class PeopleController {

    def springSecurityService

    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond People.list(params), model:[peopleCount: People.count()]
    }

    def show(People people) {
        respond people
    }

    def create() {
        respond new People(params)
    }

    @Transactional
    def save(People people) {
        if (people == null) {
            transactionStatus.setRollbackOnly()
            notFound()
            return
        }

        if (people.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond people.errors, view:'create'
            return
        }

        people.save flush:true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.created.message', args: [message(code: 'people.label', default: 'People'), people.id])
                redirect people
            }
            '*' { respond people, [status: CREATED] }
        }
    }

    def edit(People people) {
        respond people
    }

    @Transactional
    def update(People people) {
        if (people == null) {
            transactionStatus.setRollbackOnly()
            notFound()
            return
        }

        if (people.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond people.errors, view:'edit'
            return
        }

        people.save flush:true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.updated.message', args: [message(code: 'people.label', default: 'People'), people.id])
                redirect people
            }
            '*'{ respond people, [status: OK] }
        }
    }

    @Transactional
    def delete(People people) {

        if (people == null) {
            transactionStatus.setRollbackOnly()
            notFound()
            return
        }

        people.delete flush:true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.deleted.message', args: [message(code: 'people.label', default: 'People'), people.id])
                redirect action:"index", method:"GET"
            }
            '*'{ render status: NO_CONTENT }
        }
    }

    protected void notFound() {
        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.not.found.message', args: [message(code: 'people.label', default: 'People'), params.id])
                redirect action: "index", method: "GET"
            }
            '*'{ render status: NOT_FOUND }
        }
    }

    @Secured(['ROLE_USER'])
    def people() {

        def user = springSecurityService.currentUser
        def event = Event.findByEventUser(user)
        def people = People.findAllByEvent(event)

        [people: people, user: user]
    }

    @Secured(['ROLE_USER'])
    def createPerson() {

        def user = springSecurityService.currentUser
        def event = Event.findByEventUser(user)
        def places = Place.findAllByPlaceCategoryInList(PlaceCategory.findAllByEvent(event))

        [places: places, user: user]
    }

    @Secured(['ROLE_USER'])
    def savePerson() {

        def user = springSecurityService.currentUser
        def event = Event.findByEventUser(user)

        def place = Place.findById(params.place)

        ////PERSON////
        def person = new People()

        person.name = params.name
        person.surname = params.surname
        person.email = params.email
        person.phone = params.phone
        person.resume = params.resume
        person.event = event

        def birthdate = params.dateOfBirth
        DateFormat format = new SimpleDateFormat("yyyy-MM-dd")
        birthdate = format.parse(birthdate)

        person.birthdate = birthdate

        ////PHOTO FOR PERSON////
        try {

            def something = request.getFile("profilePhoto")


            println(params.profilePhoto.filename)

            File profilePhoto = new File("images/" + params.profilePhoto.filename)

            //something.transferTo(eventImage)
            FileOutputStream fos = new FileOutputStream(profilePhoto);
            fos.write(something.getBytes());

            println(profilePhoto.absolutePath)

            //InputStream targetStream = new FileInputStream(eventImage);

            //render file: targetStream, contentType: 'image/png'

            def personPhoto = new Images()

            personPhoto.url = "/images/images/" + params.profilePhoto.filename

            if(!personPhoto.save()) {
                personPhoto.errors.allErrors.each {
                    println(it)
                }
            }

            person.photo = personPhoto
        } catch (FileNotFoundException e) {
            println('algo pasó')
        }
        ////////////////////////

        person.provenance = place

        if(!person.save()) {
            person.errors.allErrors.each {
                println(it)
            }
        }
        //////////////

        redirect(action: "people")
    }

    @Secured(['ROLE_USER'])
    def editPerson() {
        
        def user = springSecurityService.currentUser
        def event = Event.findByEventUser(user)

        def person = People.findByIdAndEvent(params.id, event)

        def places = Place.findAll()

        [person: person, places: places, user: user]
    }

    @Secured(['ROLE_USER'])
    def updatePerson() {
        
        def user = springSecurityService.currentUser
        def event = Event.findByEventUser(user)

        def person = People.findByIdAndEvent(params.idPerson, event)
        def place = Place.findById(params.place)

        println(person)

        person.name = params.name
        person.surname = params.surname
        person.email = params.email
        person.phone = params.phone
        person.resume = params.resume

        def birthdate = params.dateOfBirth
        DateFormat format = new SimpleDateFormat("yyyy-MM-dd")
        birthdate = format.parse(birthdate)

        person.birthdate = birthdate
        person.provenance = place

        try {

            def something = request.getFile("profilePhoto")


            println(params.profilePhoto.filename)

            File profilePhoto = new File("images/" + params.profilePhoto.filename)

            //something.transferTo(eventImage)
            FileOutputStream fos = new FileOutputStream(profilePhoto);
            fos.write(something.getBytes());

            println(profilePhoto.absolutePath)

            //InputStream targetStream = new FileInputStream(eventImage);

            //render file: targetStream, contentType: 'image/png'

            if (!person.photo) {
                person.photo = new Images()
            }

            person.photo.url = "/images/images/" + params.profilePhoto.filename
        } catch (FileNotFoundException e) {
            println('algo pasó')
        } finally {
            println('Guardando')
        if (!person.save()) {
            person.errors.allErrors.each {
                    println(it)
                }
            }
        }
        
        redirect(action: "people")
    }

    @Secured(['permitAll'])
    def getPeople() {
        def people = People.findAll()

        render people as JSON
    }
}
