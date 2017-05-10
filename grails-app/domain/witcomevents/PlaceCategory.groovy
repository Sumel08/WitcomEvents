package witcomevents

class PlaceCategory {

    String category
	String description
    Boolean show

	static hasMany = [places: Place]
	static belongsTo = [event: Event]

	static mapping = {
        id generator: 'identity'
        
    }

    static constraints = {
    	description(maxSize:1000)
        show nullable:true
    }
}
