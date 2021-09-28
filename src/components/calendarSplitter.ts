const calendarSplitter = (cal:string) => { 
    type Searchable = {
        [key: string]: string|number;
    };
    
        const chunk = cal
            .replace("(", "")
            .replace(")", "")
            .replace('"', "")
            .split(",");
    
        const proto: Searchable = {
            type: 0,
	dateFrom: "",
	dateTo: "",
        };
        chunk.forEach((element, i) => {
            var currentKey = Object.keys(proto)[i];
            proto[currentKey] = element
                .replace('"', "")
                .trim()
                .replace( '"', "" )
                .replace('{', "")
                .replace('}', "");
        } );
    return proto;
}
export default calendarSplitter;