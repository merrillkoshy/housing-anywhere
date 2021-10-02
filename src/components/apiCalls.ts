import axios from "axios";

import { HAData } from "./dataInterfaces";

const insertData = (data: HAData) => {
	console.log(data);

	axios
		.post(`https://ha-server.herokuapp.com/listing`, data, {
			headers: {
				"Access-Control-Allow-Headers": "Content-Type, jwtSecret",
				jwtSecret: "merrillkoshy",
				"Access-Control-Allow-Origin": "*",
				"Content-Type": "application/json",
			},
		})
		.then((res) => {
			console.log(res);
		});
};
export default insertData;
