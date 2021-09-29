const imagesSplitter = (img:string) => { 
    type Searchable = {
        [key: string]: string;
    };
    
        const chunk = img
        .replace("(", "")
		.replace(")", "")
		.replace('"', "")
		.replace("{", "")
		.replace("}", "")
            .split( "," );
    
        const proto: Searchable = {
    url:""
        };
        
    const resultArray = Array( chunk.length );
        chunk.forEach((element, i) => {
            var currentKey = Object.keys(proto)[i];
            proto[currentKey] = element
                .replace('"', "")
                .trim()
                .replace( '"', "" )
                .replace('{', "")
                .replace( '}', "" );
                resultArray.push(proto)
        } );
    resultArray.filter(x=>x)
    return resultArray;
}
export default imagesSplitter;