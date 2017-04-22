package witcomevents

import static org.springframework.http.HttpStatus.*
import grails.transaction.Transactional

import grails.plugin.springsecurity.annotation.Secured

@Transactional(readOnly = false)
class ActivityTypeController {

    def springSecurityService

    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond ActivityType.list(params), model:[activityTypeCount: ActivityType.count()]
    }

    def show(ActivityType activityType) {
        respond activityType
    }

    def create() {
        respond new ActivityType(params)
    }

    @Transactional
    def save(ActivityType activityType) {
        if (activityType == null) {
            transactionStatus.setRollbackOnly()
            notFound()
            return
        }

        if (activityType.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond activityType.errors, view:'create'
            return
        }

        activityType.save flush:true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.created.message', args: [message(code: 'activityType.label', default: 'ActivityType'), activityType.id])
                redirect activityType
            }
            '*' { respond activityType, [status: CREATED] }
        }
    }

    def edit(ActivityType activityType) {
        respond activityType
    }

    @Transactional
    def update(ActivityType activityType) {
        if (activityType == null) {
            transactionStatus.setRollbackOnly()
            notFound()
            return
        }

        if (activityType.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond activityType.errors, view:'edit'
            return
        }

        activityType.save flush:true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.updated.message', args: [message(code: 'activityType.label', default: 'ActivityType'), activityType.id])
                redirect activityType
            }
            '*'{ respond activityType, [status: OK] }
        }
    }

    @Transactional
    def delete(ActivityType activityType) {

        if (activityType == null) {
            transactionStatus.setRollbackOnly()
            notFound()
            return
        }

        activityType.delete flush:true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.deleted.message', args: [message(code: 'activityType.label', default: 'ActivityType'), activityType.id])
                redirect action:"index", method:"GET"
            }
            '*'{ render status: NO_CONTENT }
        }
    }

    protected void notFound() {
        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.not.found.message', args: [message(code: 'activityType.label', default: 'ActivityType'), params.id])
                redirect action: "index", method: "GET"
            }
            '*'{ render status: NOT_FOUND }
        }
    }

    @Secured(['ROLE_USER'])
    def activities() {

        def user = springSecurityService.currentUser
        def event = Event.findByEventUser(user)

        def activities = ActivityType.findAllByEvent(event)

        [activities: activities]
    }

    @Secured(['ROLE_USER'])
    def createActivity() {

        [test: 'test']
    }

    @Secured(['ROLE_USER'])
    def saveActivity() {
        def activity = new ActivityType()

        def user = springSecurityService.currentUser
        def event = Event.findByEventUser(user)

        activity.name = params.name
        activity.description = params.description
        activity.event = event

        if(!activity.save()) {
            activity.errors.allErrors.each {
                println(it)
            }
        }

        redirect(action: "activities")
    }

    @Secured(['ROLE_USER'])
    def editActivity() {

        def user = springSecurityService.currentUser
        def event = Event.findByEventUser(user)

        def activity = ActivityType.findByIdAndEvent(params.id, event)

        [activity: activity]
    }

    @Secured(['ROLE_USER'])
    def updateActivity() {

        def user = springSecurityService.currentUser
        def event = Event.findByEventUser(user)

        def activity = ActivityType.findByIdAndEvent(params.idActivity, event)

        activity.name = params.name
        activity.description = params.description

        if(!activity.save()) {
            activity.errors.allErrors.each {
                println(it)
            }
        }

        redirect(action: "activities")
    }
}
