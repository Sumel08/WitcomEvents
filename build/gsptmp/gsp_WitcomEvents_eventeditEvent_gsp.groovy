import grails.plugins.metadata.GrailsPlugin
import org.grails.gsp.compiler.transform.LineNumber
import org.grails.gsp.GroovyPage
import org.grails.web.taglib.*
import org.grails.taglib.GrailsTagException
import org.springframework.web.util.*
import grails.util.GrailsUtil

class gsp_WitcomEvents_eventeditEvent_gsp extends GroovyPage {
public String getGroovyPageFileName() { "/WEB-INF/grails-app/views/event/editEvent.gsp" }
public Object run() {
Writer out = getOut()
Writer expressionOut = getExpressionOut()
registerSitemeshPreprocessMode()
printHtmlPart(0)
createTagBody(1, {->
printHtmlPart(1)
createTagBody(2, {->
createTagBody(3, {->
expressionOut.print(event.name)
})
invokeTag('captureTitle','sitemesh',4,[:],3)
})
invokeTag('wrapTitleTag','sitemesh',4,[:],2)
printHtmlPart(1)
invokeTag('captureMeta','sitemesh',5,['gsp_sm_xmlClosingForEmptyTag':("/"),'name':("layout"),'content':("witcom")],-1)
printHtmlPart(2)
})
invokeTag('captureHead','sitemesh',20,[:],1)
printHtmlPart(3)
createTagBody(1, {->
printHtmlPart(4)
createTagBody(2, {->
printHtmlPart(5)
expressionOut.print(event.name)
printHtmlPart(6)
expressionOut.print(event.code)
printHtmlPart(7)
for( place in (places) ) {
printHtmlPart(8)
if(true && (event.place)) {
printHtmlPart(9)
if(true && (event.place.id == place.id)) {
printHtmlPart(10)
expressionOut.print(place.id)
printHtmlPart(11)
expressionOut.print(place.placeName)
printHtmlPart(12)
}
else {
printHtmlPart(10)
expressionOut.print(place.id)
printHtmlPart(13)
expressionOut.print(place.placeName)
printHtmlPart(12)
}
printHtmlPart(8)
}
else {
printHtmlPart(14)
expressionOut.print(place.id)
printHtmlPart(13)
expressionOut.print(place.placeName)
printHtmlPart(15)
}
printHtmlPart(16)
}
printHtmlPart(17)
expressionOut.print(event.description)
printHtmlPart(18)
for( person in (people) ) {
printHtmlPart(9)
if(true && (event.chairs.people.id.contains(person.id))) {
printHtmlPart(10)
expressionOut.print(person.id)
printHtmlPart(11)
expressionOut.print(person.name)
printHtmlPart(19)
expressionOut.print(person.surname)
printHtmlPart(12)
}
else {
printHtmlPart(10)
expressionOut.print(person.id)
printHtmlPart(13)
expressionOut.print(person.name)
printHtmlPart(19)
expressionOut.print(person.surname)
printHtmlPart(12)
}
printHtmlPart(8)
}
printHtmlPart(20)
invokeTag('hiddenField','g',133,['name':("flag"),'id':("flag"),'value':("0")],-1)
printHtmlPart(21)
})
invokeTag('form','g',140,['name':("eventInfo"),'action':("updateEvent"),'enctype':("multipart/form-data")],2)
printHtmlPart(22)
expressionOut.print(event.startDate)
printHtmlPart(23)
expressionOut.print(event.endDate)
printHtmlPart(24)
})
invokeTag('captureBody','sitemesh',193,[:],1)
printHtmlPart(25)
}
public static final Map JSP_TAGS = new HashMap()
protected void init() {
	this.jspTags = JSP_TAGS
}
public static final String CONTENT_TYPE = 'text/html;charset=UTF-8'
public static final long LAST_MODIFIED = 1492902496000L
public static final String EXPRESSION_CODEC = 'html'
public static final String STATIC_CODEC = 'none'
public static final String OUT_CODEC = 'none'
public static final String TAGLIB_CODEC = 'none'
}
