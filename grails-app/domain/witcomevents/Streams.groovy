package witcomevents

class Streams {

    String url
	String description
	Event event

	static belongsTo = [Event]

	static mapping = {
        id generator: 'identity'
        
    }

    static constraints = {
    	description nullable: true
    }
}
