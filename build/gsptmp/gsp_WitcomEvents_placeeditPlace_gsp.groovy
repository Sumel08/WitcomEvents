import grails.plugins.metadata.GrailsPlugin
import org.grails.gsp.compiler.transform.LineNumber
import org.grails.gsp.GroovyPage
import org.grails.web.taglib.*
import org.grails.taglib.GrailsTagException
import org.springframework.web.util.*
import grails.util.GrailsUtil

class gsp_WitcomEvents_placeeditPlace_gsp extends GroovyPage {
public String getGroovyPageFileName() { "/WEB-INF/grails-app/views/place/editPlace.gsp" }
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
for( placeCategory in (placeCategories) ) {
printHtmlPart(7)
if(true && (place.placeCategory)) {
printHtmlPart(8)
if(true && (place.placeCategory.id == placeCategory.id)) {
printHtmlPart(9)
expressionOut.print(placeCategory.id)
printHtmlPart(10)
expressionOut.print(placeCategory.category)
printHtmlPart(11)
}
else {
printHtmlPart(9)
expressionOut.print(placeCategory.id)
printHtmlPart(12)
expressionOut.print(placeCategory.category)
printHtmlPart(11)
}
printHtmlPart(7)
}
else {
printHtmlPart(13)
expressionOut.print(placeCategory.id)
printHtmlPart(12)
expressionOut.print(placeCategory.category)
printHtmlPart(14)
}
printHtmlPart(15)
}
printHtmlPart(16)
expressionOut.print(place.placeName)
printHtmlPart(17)
expressionOut.print(place.description)
printHtmlPart(18)
expressionOut.print(place.telephone)
printHtmlPart(19)
expressionOut.print(place.email)
printHtmlPart(20)
expressionOut.print(place.website)
printHtmlPart(21)
expressionOut.print(place.indication)
printHtmlPart(22)
expressionOut.print(place.additionalInfo)
printHtmlPart(23)
expressionOut.print(place.latitude)
printHtmlPart(24)
expressionOut.print(place.longitude)
printHtmlPart(25)
expressionOut.print(place.altitude)
printHtmlPart(26)
invokeTag('hiddenField','g',150,['name':("idPlace"),'id':("idPlace"),'value':(place.id)],-1)
printHtmlPart(27)
})
invokeTag('form','g',157,['name':("placeInfo"),'action':("updatePlace"),'enctype':("multipart/form-data")],2)
printHtmlPart(28)
})
invokeTag('captureBody','sitemesh',185,[:],1)
printHtmlPart(29)
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
