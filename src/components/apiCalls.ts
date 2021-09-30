import { createListing } from "../Backend/pgCRUD";
import { HAData } from "./dataInterfaces";

const insertThis = (data:HAData) => {
    console.log( data )
    console.log( `im gonna send ${ data } to the API` );
    // createListing(data)
}
export default insertThis;