package witcomevents

class PlaceCategory {

    String category
	String description

	static hasMany = [places: Place]
	static belongsTo = [event: Event]

	static mapping = {
        id generator: 'identity'
        
    }

    static constraints = {
    	description(maxSize:1000)
    }
}
