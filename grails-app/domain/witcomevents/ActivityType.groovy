package witcomevents

class ActivityType {

    String name
	String description
	Date dateCreated

	static hasMany = [activities: Activity]
    static belongsTo = [event: Event]

	static mapping = {
        id generator: 'identity'
        version false
        
    }

    static constraints = {
    	description(maxSize:1000)
    }
}
