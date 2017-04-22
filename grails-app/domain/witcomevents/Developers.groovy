package witcomevents

class Developers {

    static belongsTo = [event: Event, people: People]

	static mapping = {
        id generator: 'identity'
        
    }

    static constraints = {
    }
}
