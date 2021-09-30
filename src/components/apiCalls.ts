import axios from "axios";

import { HAData } from "./dataInterfaces";

const insertData = (data:HAData) => {
    console.log( data )
    Object.keys( data ).map( (obs,i) => { 
console.log(obs,i)
    })

    axios.post( "https://ha-server.herokuapp.com/listing", data ).then( res => { console.log(res)})
}
export default insertData;