import axios from "axios";

import { HAData } from "./dataInterfaces";

const insertData = (data: HAData) => {
	console.log(data);
	Object.keys(data).map((obs, i) => {
		console.log(obs, i);
	});
	console.log(process.env.REACT_APP_DB_URL);
	axios
		.post(`${process.env.REACT_APP_DB_URL}/listing`, data, {
			headers: {
				jwtSecret: "merrillkoshy",
			},
		})
		.then((res) => {
			console.log(res);
		});
};
export default insertData;
