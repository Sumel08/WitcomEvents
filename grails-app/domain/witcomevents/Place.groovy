package witcomevents

class Place {

    String placeName
	String description
	String longitude
	String latitude
	String altitude
	String indication
	String additionalInfo
	String website
	String email
	String telephone
	Images image

	static hasMany = [placeSocialNetworks: PlaceSocialNetworks]
	static belongsTo = [placeCategory: PlaceCategory]

	static mapping = {
        id generator: 'identity'
        
    }

    static constraints = {
    	placeCategory nullable: true
    	description(maxSize:1000)
    }
}
