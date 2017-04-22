package witcomevents

import grails.test.mixin.*
import spock.lang.*

@TestFor(ImagesController)
@Mock(Images)
class ImagesControllerSpec extends Specification {

    def populateValidParams(params) {
        assert params != null

        // TODO: Populate valid properties like...
        //params["name"] = 'someValidName'
        assert false, "TODO: Provide a populateValidParams() implementation for this generated test suite"
    }

    void "Test the index action returns the correct model"() {

        when:"The index action is executed"
            controller.index()

        then:"The model is correct"
            !model.imagesList
            model.imagesCount == 0
    }

    void "Test the create action returns the correct model"() {
        when:"The create action is executed"
            controller.create()

        then:"The model is correctly created"
            model.images!= null
    }

    void "Test the save action correctly persists an instance"() {

        when:"The save action is executed with an invalid instance"
            request.contentType = FORM_CONTENT_TYPE
            request.method = 'POST'
            def images = new Images()
            images.validate()
            controller.save(images)

        then:"The create view is rendered again with the correct model"
            model.images!= null
            view == 'create'

        when:"The save action is executed with a valid instance"
            response.reset()
            populateValidParams(params)
            images = new Images(params)

            controller.save(images)

        then:"A redirect is issued to the show action"
            response.redirectedUrl == '/images/show/1'
            controller.flash.message != null
            Images.count() == 1
    }

    void "Test that the show action returns the correct model"() {
        when:"The show action is executed with a null domain"
            controller.show(null)

        then:"A 404 error is returned"
            response.status == 404

        when:"A domain instance is passed to the show action"
            populateValidParams(params)
            def images = new Images(params)
            controller.show(images)

        then:"A model is populated containing the domain instance"
            model.images == images
    }

    void "Test that the edit action returns the correct model"() {
        when:"The edit action is executed with a null domain"
            controller.edit(null)

        then:"A 404 error is returned"
            response.status == 404

        when:"A domain instance is passed to the edit action"
            populateValidParams(params)
            def images = new Images(params)
            controller.edit(images)

        then:"A model is populated containing the domain instance"
            model.images == images
    }

    void "Test the update action performs an update on a valid domain instance"() {
        when:"Update is called for a domain instance that doesn't exist"
            request.contentType = FORM_CONTENT_TYPE
            request.method = 'PUT'
            controller.update(null)

        then:"A 404 error is returned"
            response.redirectedUrl == '/images/index'
            flash.message != null

        when:"An invalid domain instance is passed to the update action"
            response.reset()
            def images = new Images()
            images.validate()
            controller.update(images)

        then:"The edit view is rendered again with the invalid instance"
            view == 'edit'
            model.images == images

        when:"A valid domain instance is passed to the update action"
            response.reset()
            populateValidParams(params)
            images = new Images(params).save(flush: true)
            controller.update(images)

        then:"A redirect is issued to the show action"
            images != null
            response.redirectedUrl == "/images/show/$images.id"
            flash.message != null
    }

    void "Test that the delete action deletes an instance if it exists"() {
        when:"The delete action is called for a null instance"
            request.contentType = FORM_CONTENT_TYPE
            request.method = 'DELETE'
            controller.delete(null)

        then:"A 404 is returned"
            response.redirectedUrl == '/images/index'
            flash.message != null

        when:"A domain instance is created"
            response.reset()
            populateValidParams(params)
            def images = new Images(params).save(flush: true)

        then:"It exists"
            Images.count() == 1

        when:"The domain instance is passed to the delete action"
            controller.delete(images)

        then:"The instance is deleted"
            Images.count() == 0
            response.redirectedUrl == '/images/index'
            flash.message != null
    }
}
