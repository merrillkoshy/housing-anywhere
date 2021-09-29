
import addressSplitter from "./addressSplitter";
import calendarSplitter from "./calendarSplitter";
import costsSplitter from "./costsSplitter";
import rulesSplitter from "./rulesSplitter";
import facilitiesSplitter from "./facilitiesSplitter";
import imagesSplitter from "./imagesSplitter";


const sanitizeListings = ( listing: any ) => {

    const sanitizeEntry = ( entry: { facilities: any; address: any; rules: any; calendaroperations: any; images: any; costs: any; extradata: any; } ) => {
        const { proto,child}=facilitiesSplitter( entry.facilities );
        entry.address = addressSplitter( entry.address );
        entry.rules = rulesSplitter( entry.rules );
        entry.facilities = proto;
        entry.facilities.additionalcosts = child;
        entry.calendaroperations = calendarSplitter( entry.calendaroperations );
        
        entry.images = imagesSplitter( entry.images );
		
        
        entry.costs = costsSplitter( entry.costs );
        entry.extradata=entry.extradata.replaceAll("'", "").replaceAll("\\", "");
    }
    listing.map( (listed: any) => {
        return (
            sanitizeEntry( listed )
        )
        
    } )
    return listing;
    
    
}
export default sanitizeListings;