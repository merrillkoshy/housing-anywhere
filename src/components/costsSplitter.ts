const costsSplitter = (cost: string) => {
	type Searchable = {
		[key: string]: string | number | boolean | Array<Searchable>;
	};

	const regex = new RegExp(/\(([^()]*)\)/g);
	const isAnArray = regex.test(cost);
	const parentArrayPusher = [];
	const childArrayPusher: Array<any> = [];
	const chunk = cost
		.replace("(", "")
		.trim()
		.replace(")", "")
		.trim()
		.replace('"', "")
		.trim()
		.replace('\\"', "")
		.replaceAll(/\s/g, "")
		.split(",");

	const proto: Searchable = {
		type: "",
		value: 0,
		payableAt: "",
		payableBy: "",
		refundable: "",
		estimated: "",
		mandatory: "",
	};

	chunk.forEach((element, i) => {
		var currentKey = Object.keys(proto)[i];
		const isAnArray = regex.test(element);

		proto[currentKey] = element
			.replace("(", "")
			.trim()
			.replace(")", "")
			.replace("{", "")
			.replace("}", "")
			.replace('"', "")
			.replace(" ", "")
			.trim()
			.replace('"', "")
			.replaceAll(/\s/g, "");
		if (proto[currentKey] === "t") proto[currentKey] = true;
		if (proto[currentKey] === "f") proto[currentKey] = false;
		if (isAnArray) {
			childArrayPusher.push(proto[currentKey]);
			proto[currentKey] = childArrayPusher;
		}
	});

	if (isAnArray) {
		parentArrayPusher.push(proto);
		return parentArrayPusher;
	} else {
		return proto;
	}
};
export default costsSplitter;
