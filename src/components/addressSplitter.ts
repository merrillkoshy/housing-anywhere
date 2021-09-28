const addressSplitter = (address:string) => { 
    type Searchable = {
        [key: string]: string;
    };
    
        const chunk = address
            .replace("(", "")
            .replace(")", "")
            .replace('"', "")
            .split(",");
    
        const proto: Searchable = {
            housenumber: "",
            street: "",
            city: "",
            state: "",
            postalCode: "",
            neighborhood: "",
            countryCode: "",
        };
        chunk.forEach((element, i) => {
            var currentKey = Object.keys(proto)[i];
            proto[currentKey] = element
                .replace('"', "")
                .trim()
                .replace('"', "");
        } );
    return proto;
}
export default addressSplitter;