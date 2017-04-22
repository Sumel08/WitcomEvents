package witcomevents

class PlaceSocialNetworks {

    static belongsTo = [place: Place, socialNetworks: SocialNetworks]

    static constraints = {
    	id generator: 'identity'
    }
}
