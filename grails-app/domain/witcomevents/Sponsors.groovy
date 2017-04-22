package witcomevents

class Sponsors {

    static belongsTo = [evento: Event, people: People]

	static mapping = {
        id generator: 'identity'
        
    }

    static constraints = {
    }
}
