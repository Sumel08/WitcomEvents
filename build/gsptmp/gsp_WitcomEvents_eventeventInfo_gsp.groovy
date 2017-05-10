import grails.plugins.metadata.GrailsPlugin
import org.grails.gsp.compiler.transform.LineNumber
import org.grails.gsp.GroovyPage
import org.grails.web.taglib.*
import org.grails.taglib.GrailsTagException
import org.springframework.web.util.*
import grails.util.GrailsUtil

class gsp_WitcomEvents_eventeventInfo_gsp extends GroovyPage {
public String getGroovyPageFileName() { "/WEB-INF/grails-app/views/event/eventInfo.gsp" }
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
invokeTag('captureHead','sitemesh',6,[:],1)
printHtmlPart(2)
createTagBody(1, {->
printHtmlPart(3)
expressionOut.print(event.name)
printHtmlPart(4)
expressionOut.print(event.eventImage?event.eventImage.url:"")
printHtmlPart(5)
invokeTag('formatDate','g',22,['format':("MMMM dd yyyy hh:mm:ss a"),'date':(event.startDate)],-1)
printHtmlPart(6)
invokeTag('formatDate','g',25,['format':("MMMM dd yyyy hh:mm:ss a"),'date':(event.endDate)],-1)
printHtmlPart(7)
expressionOut.print(event.description)
printHtmlPart(8)
if(true && (event.place)) {
printHtmlPart(9)
expressionOut.print(event.place.placeName)
printHtmlPart(10)
expressionOut.print(event.place.image.url)
printHtmlPart(11)
expressionOut.print(event.place.placeName)
printHtmlPart(12)
expressionOut.print(event.place.description)
printHtmlPart(13)
expressionOut.print(event.place.email)
printHtmlPart(14)
expressionOut.print(event.place.telephone)
printHtmlPart(15)
expressionOut.print(event.place.website)
printHtmlPart(16)
expressionOut.print(event.place.indication)
printHtmlPart(17)
expressionOut.print(event.place.additionalInfo)
printHtmlPart(18)
}
printHtmlPart(19)
for( chair in (event.chairs) ) {
printHtmlPart(20)
expressionOut.print(chair.people.photo.url)
printHtmlPart(21)
expressionOut.print(chair.people.name)
printHtmlPart(22)
expressionOut.print(chair.people.surname)
printHtmlPart(23)
expressionOut.print(chair.people.email)
printHtmlPart(24)
expressionOut.print(chair.people.phone)
printHtmlPart(25)
expressionOut.print(chair.people.provenance.placeName)
printHtmlPart(26)
}
printHtmlPart(27)
})
invokeTag('captureBody','sitemesh',96,[:],1)
printHtmlPart(28)
}
public static final Map JSP_TAGS = new HashMap()
protected void init() {
	this.jspTags = JSP_TAGS
}
public static final String CONTENT_TYPE = 'text/html;charset=UTF-8'
public static final long LAST_MODIFIED = 1492903779000L
public static final String EXPRESSION_CODEC = 'html'
public static final String STATIC_CODEC = 'none'
public static final String OUT_CODEC = 'none'
public static final String TAGLIB_CODEC = 'none'
}
