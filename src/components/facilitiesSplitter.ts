const facilitiesSplitter = (facilities:string) => { 

    
    type Searchable = {
        [key: string]: string|boolean|number,
    };
    
        const chunk = facilities
            .replace( "(", "" )
            .trim()
            .replace( ")", "" )
            .trim()
            .replace( '"', "" )
            .trim()
            .replace( '\\"', "" )
            .replaceAll(/\s/g,'')
            .split( "," );
    const additionalCosts = facilities.split( '"(' )[ 1 ].replace( ')"', "" ).replace( ')', "" ).split( "," );;
    
        const proto: Searchable = {
            allergyFriendly: false,
            housematesGender: "",
            registrationPossible: false,
            tenantStatus: "",
            freePlaces: 0,
            bedrooms: 0,
            bedroomFurnished: false,
            bedroomSize: 0,
            bedroomLock: false,
            balconyTerrace: "",
            basement: "",
            bathroom: "",
            garden: "",
            kitchen: "",
            livingRoom: "",
            parking: "",
            toilet: "",
            totalSize: 0,
            wheelchairAccessible: false,
            airConditioning: false,
            bed: false,
            closet: false,
            desk: false,
            dishwasher: false,
            dryer: false,
            internet: false,
            roomFurniture: false,
            tv: false,
            washingMachine: false,
            wifi: false,
            flooring: "",
            heating: "",
            kitchenware: "",
        };
    const child: Searchable = {
        water: false,
	gas: false,
	electricity: false,
	internet: false
    }
        chunk.forEach((element, i) => {
            var currentKey = Object.keys(proto)[i];
            proto[ currentKey ] = element
            .replace( "(", "" )
            .trim()
            .replace( ")", "" )
                .replace( '"', "" )
                .replace( ' ', "" )
                .trim()
                .replace( '"', "" )
                .replaceAll( /\s/g, '' );
            if ( proto[ currentKey ] === "t" ) proto[ currentKey ] = true;
            if ( proto[ currentKey ] === "f" ) proto[ currentKey ] = false;
        } );
    additionalCosts.forEach( ( element, i ) => { 
        var currentKey = Object.keys(proto)[i];
            child[ currentKey ] = element.trim()
            if ( child[ currentKey ] === "t" ) proto[ currentKey ] = true;
            if ( child[ currentKey ] === "f" ) proto[ currentKey ] = false;
        } );
    return {proto,child};
}
export default facilitiesSplitter;