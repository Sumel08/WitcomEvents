package witcomevents

class Event {

    String name
	String code
	String description
	Date dateCreated
	Date startDate
	Date endDate
	Images eventImage
	Images sketch
	Place place
	Schedule schedule

	static hasMany = [streams: Streams, developers: Developers, chairs: Chairs]

	static belongsTo = [eventUser: User]

	static mapping = {
        id generator: 'identity'
        
    }

    static constraints = {
    	code unique: true
    	eventImage nullable: true
    	sketch nullable: true
    	place nullable: true
    	schedule nullable: true
    	description(maxSize:1000)
    }
}
