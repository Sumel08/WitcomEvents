package witcomevents

class Schedule {

    Date dateCreated

	static hasMany = [activities: Activity]

	static belongsTo = [event: Event]

	static mapping = {
        id generator: 'identity'
        
    }

    static constraints = {
    }
}
