import axios from "axios";
import { toast } from "react-toastify";
import { HAData } from "./dataInterfaces";
import formatter from "./formatter";

const insertData = (data: HAData, getter: () => void) => {
	var {
		id,
		price,
		currencycode,
		address,
		type,
		kind,
		description,
		deposit,
		estimatedbills,
		minimumstaymonths,
		maxbookabledays,
		moveinwindow,
		currentoccupancy,
		rules,
		minage,
		maxage,
		preferredgender,
		alias,
		externalreference,
		extradata,
		facilities,
		calendaroperations,
		images,
		costs,
	} = data;

	//since we dont have an image server, we do temp images here
	images = [{ url: "https://picsum.photos/300/300" }];

	//formatting for psql because js arrays and objects are notated
	//differently for psql eg: for arrays its ARRAY[(val1,val2)] and
	//for objects {} will become ().
	const stringedAddress = formatter.formatter(address);

	const stringedFacilities = formatter.formatter(facilities);

	const stringedRules = formatter.formatter(rules);

	const stringedImages = formatter.arrayformatter(images);

	const stringedCosts = formatter.arrayformatter(costs);

	const stringedcalendaroperations = formatter.arrayformatter(
		calendaroperations
	);

	const toSend = {
		id,
		price,
		currencycode,
		address: stringedAddress,
		type,
		kind,
		description,
		deposit,
		estimatedbills,
		minimumstaymonths,
		maxbookabledays,
		moveinwindow,
		currentoccupancy,
		rules: stringedRules,
		minage,
		maxage,
		preferredgender,
		alias,
		externalreference,
		extradata,
		facilities: stringedFacilities,
		calendaroperations: stringedcalendaroperations,
		images: stringedImages,
		costs: stringedCosts,
	};

	axios
		.post(`https://ha-server.herokuapp.com/listing`, toSend, {
			headers: {
				"Access-Control-Allow-Headers": "Content-Type, jwtSecret",
				jwtSecret: "merrillkoshy",
				"Access-Control-Allow-Origin": "*",
				"Content-Type": "application/json",
			},
		})
		.then((res) => {
			toast(`Inserted listing with id ${res.data.id}`, {
				position: "top-center",
				type: "success",
			});
			getter();
		})
		.catch((err) => {
			console.log(err);
			toast(`Error in call`, {
				position: "top-center",
				type: "error",
			});
		});
};

const updateListing = async (id: number, field: any) => {
	const { price, currencyCode } = field;
	await axios
		.put(
			`https://ha-server.herokuapp.com/listing`,
			{
				price,
				currencyCode,
				id,
			},
			{
				headers: {
					"Access-Control-Allow-Headers": "Content-Type, jwtSecret",
					jwtSecret: "merrillkoshy",
					"Access-Control-Allow-Origin": "*",
					"Content-Type": "application/json",
				},
			}
		)
		.then((res) => {
			toast("Succesfully Updated ", {
				position: "bottom-center",
				type: "success",
			});
		})
		.catch((err) => {
			console.log(err);
			toast(`Error in call`, {
				position: "bottom-center",
				type: "error",
			});
		});
};
const deleteListing = async (id: number, getter: () => void) => {
	await axios
		.delete(`https://ha-server.herokuapp.com/listing/${id}`, {
			headers: {
				"Access-Control-Allow-Headers": "Content-Type, jwtSecret",
				jwtSecret: "merrillkoshy",
				"Access-Control-Allow-Origin": "*",
				"Content-Type": "application/json",
			},
		})
		.then((res) => {
			toast("Succesfully Deleted ", {
				position: "bottom-center",
				type: "success",
			});
			getter();
		})
		.catch((err) => {
			console.log(err);
			toast(`Error in call`, {
				position: "bottom-center",
				type: "error",
			});
		});
};
const apiCalls = { insertData, deleteListing, updateListing };

export default apiCalls;
