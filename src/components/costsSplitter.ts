const costsSplitter = (address:string) => { 
    type Searchable = {
        [key: string]: string|number|boolean,
    };
    
        const chunk = address
            .replace( "(", "" )
            .trim()
            .replace( ")", "" )
            .trim()
            .replace( '"', "" )
            .trim()
            .replace( '\\"', "" )
            .replaceAll(/\s/g,'')
            .split(",");
    
        const proto: Searchable = {
            type: "",
            value: 0,
            payableAt: "",
            payableBy: "",
            refundable: "",
            estimated: "",
            mandatory: ""
        };
        chunk.forEach((element, i) => {
            var currentKey = Object.keys(proto)[i];
            proto[ currentKey ] = element
            .replace( "(", "" )
            .trim()
                .replace( ")", "" )
                .replace( "{", "" )
                .replace( "}", "" )
                .replace( '"', "" )
                .replace( ' ', "" )
                .trim()
                .replace( '"', "" )
                .replaceAll( /\s/g, '' );
                if ( proto[ currentKey ] === "t" ) proto[ currentKey ] = true;
                if ( proto[ currentKey ] === "f" ) proto[ currentKey ] = false;

        } );
    return proto;
}
export default costsSplitter;