package witcomevents

class Chairs {

    static belongsTo = [event: Event, people: People]

	static mapping = {
        id generator: 'identity'
        
    }

    static constraints = {
    }
}
