
import React from "react";


const prepareForExport = ( listing: any ) => {

    const sanitizeEntry = ( entry: { facilities: any; address: any; rules: any; calendaroperations: any; images: any; costs: any; extradata: any; } ) => {
        
        entry.address = JSON.stringify(entry.address);
        entry.rules = JSON.stringify(entry.rules);
        entry.facilities = JSON.stringify(entry.facilities);
        entry.calendaroperations = JSON.stringify(entry.calendaroperations);
        entry.images = JSON.stringify(entry.images);
        entry.costs = JSON.stringify(entry.costs);
        entry.extradata=JSON.stringify(entry.extradata);
    }
    listing.map( (listed: any) => {
        return (
            sanitizeEntry( listed )
        )
        
    } )
    return listing;
    
    
}
export default prepareForExport;