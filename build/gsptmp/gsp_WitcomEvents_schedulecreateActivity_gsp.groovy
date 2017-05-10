import grails.plugins.metadata.GrailsPlugin
import org.grails.gsp.compiler.transform.LineNumber
import org.grails.gsp.GroovyPage
import org.grails.web.taglib.*
import org.grails.taglib.GrailsTagException
import org.springframework.web.util.*
import grails.util.GrailsUtil

class gsp_WitcomEvents_schedulecreateActivity_gsp extends GroovyPage {
public String getGroovyPageFileName() { "/WEB-INF/grails-app/views/schedule/createActivity.gsp" }
public Object run() {
Writer out = getOut()
Writer expressionOut = getExpressionOut()
registerSitemeshPreprocessMode()
printHtmlPart(0)
createTagBody(1, {->
printHtmlPart(1)
createTagBody(2, {->
createClosureForHtmlPart(2, 3)
invokeTag('captureTitle','sitemesh',4,[:],3)
})
invokeTag('wrapTitleTag','sitemesh',4,[:],2)
printHtmlPart(1)
invokeTag('captureMeta','sitemesh',5,['gsp_sm_xmlClosingForEmptyTag':("/"),'name':("layout"),'content':("witcom")],-1)
printHtmlPart(3)
})
invokeTag('captureHead','sitemesh',18,[:],1)
printHtmlPart(4)
createTagBody(1, {->
printHtmlPart(5)
createTagBody(2, {->
printHtmlPart(6)
for( activityType in (activitiesType) ) {
printHtmlPart(7)
expressionOut.print(activityType.id)
printHtmlPart(8)
expressionOut.print(activityType.name)
printHtmlPart(9)
}
printHtmlPart(10)
for( place in (places) ) {
printHtmlPart(7)
expressionOut.print(place.id)
printHtmlPart(8)
expressionOut.print(place.placeName)
printHtmlPart(9)
}
printHtmlPart(11)
for( person in (people) ) {
printHtmlPart(12)
expressionOut.print(person.id)
printHtmlPart(8)
expressionOut.print(person.name)
printHtmlPart(13)
}
printHtmlPart(14)
invokeTag('hiddenField','g',154,['name':("idActivity"),'id':("idActivity")],-1)
printHtmlPart(15)
})
invokeTag('form','g',161,['name':("activity"),'action':("saveActivity"),'enctype':("multipart/form-data")],2)
printHtmlPart(16)
})
invokeTag('captureBody','sitemesh',189,[:],1)
printHtmlPart(17)
}
public static final Map JSP_TAGS = new HashMap()
protected void init() {
	this.jspTags = JSP_TAGS
}
public static final String CONTENT_TYPE = 'text/html;charset=UTF-8'
public static final long LAST_MODIFIED = 1492313190000L
public static final String EXPRESSION_CODEC = 'html'
public static final String STATIC_CODEC = 'none'
public static final String OUT_CODEC = 'none'
public static final String TAGLIB_CODEC = 'none'
}
