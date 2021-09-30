import axios from "axios";

import { HAData } from "./dataInterfaces";

const insertData = (data:HAData) => {
    console.log( data )
    Object.keys( data ).map( (obs,i) => { 
console.log(obs,i)
    })

    axios.post( "http://localhost:3001/listing", data ).then( res => { console.log(res)})
}
export default insertData;