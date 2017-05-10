package witcomevents

import static org.springframework.http.HttpStatus.*
import grails.transaction.Transactional

import java.text.DateFormat
import java.text.SimpleDateFormat

import grails.plugin.springsecurity.annotation.Secured
import grails.converters.JSON

@Transactional(readOnly = true)
class ScheduleController {

    def springSecurityService

    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond Schedule.list(params), model:[scheduleCount: Schedule.count()]
    }

    def show(Schedule schedule) {
        respond schedule
    }

    def create() {
        respond new Schedule(params)
    }

    @Transactional
    def save(Schedule schedule) {
        if (schedule == null) {
            transactionStatus.setRollbackOnly()
            notFound()
            return
        }

        if (schedule.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond schedule.errors, view:'create'
            return
        }

        schedule.save flush:true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.created.message', args: [message(code: 'schedule.label', default: 'Schedule'), schedule.id])
                redirect schedule
            }
            '*' { respond schedule, [status: CREATED] }
        }
    }

    def edit(Schedule schedule) {
        respond schedule
    }

    @Transactional
    def update(Schedule schedule) {
        if (schedule == null) {
            transactionStatus.setRollbackOnly()
            notFound()
            return
        }

        if (schedule.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond schedule.errors, view:'edit'
            return
        }

        schedule.save flush:true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.updated.message', args: [message(code: 'schedule.label', default: 'Schedule'), schedule.id])
                redirect schedule
            }
            '*'{ respond schedule, [status: OK] }
        }
    }

    @Transactional
    def delete(Schedule schedule) {

        if (schedule == null) {
            transactionStatus.setRollbackOnly()
            notFound()
            return
        }

        schedule.delete flush:true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.deleted.message', args: [message(code: 'schedule.label', default: 'Schedule'), schedule.id])
                redirect action:"index", method:"GET"
            }
            '*'{ render status: NO_CONTENT }
        }
    }

    protected void notFound() {
        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.not.found.message', args: [message(code: 'schedule.label', default: 'Schedule'), params.id])
                redirect action: "index", method: "GET"
            }
            '*'{ render status: NOT_FOUND }
        }
    }

    @Secured(['ROLE_USER'])
    def schedule() {
        def user = springSecurityService.currentUser
        def event = Event.findByEventUser(user)

        def schedule = event.schedule
        def activities = Activity.findBySchedule(schedule)

        [event: event, schedule: schedule, activities: activities, user: user]
    }

    @Secured(['ROLE_USER'])
    def createActivity() {

        def user = springSecurityService.currentUser
        def event = Event.findByEventUser(user)
        print(event)
        print(ActivityType.findAllByEvent(event))
        def activitiesType = ActivityType.findAllByEvent(event)
        def places = Place.findAllByPlaceCategoryInList(PlaceCategory.findAllByEvent(event))
        def people = People.findAllByEvent(event)

        [activitiesType: activitiesType, places: places, people: people, user:user]
    }

    @Secured(['ROLE_USER'])
    def saveActivity() {

        println(params)

        def user = springSecurityService.currentUser
        def event = Event.findByEventUser(user)

        def activity = new Activity()
        def activityType = ActivityType.findById(params.activityType)

        activity.activityType = activityType

        def beginDate = params.beginDate.split("T")
        def beginTime = beginDate[1].split(":")
        beginDate = beginDate[0] + " " + beginTime[0] + ":" + beginTime[1]

        def endDate = params.endDate.split("T")
        def endTime = endDate[1].split(":")
        endDate = endDate[0] + " " + endTime[0] + ":" + endTime[1]
        
        DateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm")
        beginDate = format.parse(beginDate)
        endDate = format.parse(endDate)

        activity.beginDate = beginDate
        activity.endDate = endDate

        activity.title = params.title
        activity.subtitle = params.subtitle
        activity.description = params.description
        activity.price = Double.parseDouble(params.price)
        activity.notes = params.notes

        def place = Place.findById(params.place)

        activity.place = place
        activity.schedule = event.schedule

        if(!activity.save()) {
            activity.errors.allErrors.each {
                println(it)
            }
        }


        if(params.speakers) {
            println(params.speakers.size())
            params.speakers.each {
                def activityPeople = new ActivityPeople()
                activityPeople.activity = activity
                activityPeople.people = People.findById(it)

                activityPeople.errors.allErrors.each{ algo ->
                    println('Nuevo')
                    println(algo)
                }

                if(!activityPeople.save()) {
                    println('ActivityPeople no save')
                    activityPeople.errors.allErrors.each{ act->
                        println(act)
                    }
                }
                println(it)
            }
        }

        redirect(action: 'schedule')
    }

    @Secured(['ROLE_USER'])
    def editSchedule() {
        def user = springSecurityService.currentUser
        def event = Event.findByEventUser(user)

        def schedule = event.schedule
        def activities = Activity.findBySchedule(schedule)

        [evento: event, schedule: schedule, activities: activities]
    }

    @Secured(['ROLE_USER'])
    def updateSchedule() {

    }

    @Secured(['permitAll'])
    def getSchedule() {

        ArrayList<String> nothing = new ArrayList<>()

        try {
            def event = Event.findAllByCode(params.id)
            def schedule = Schedule.findAllByIdInList(event.schedule.id)

            render schedule as JSON
        } catch (Exception e) {
            println(e)
            render nothing as JSON
        }
    }
}
