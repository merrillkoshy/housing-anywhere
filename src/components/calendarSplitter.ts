const calendarSplitter = (cal: string) => {
	type Searchable = {
		[key: string]: string | number | Array<Searchable>;
	};

	const regex = new RegExp(/\(([^()]*)\)/g);
	const isAnArray = regex.test(cal);
	const parentArrayPusher = [];
	const childArrayPusher: Array<any> = [];

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
		const isAnArray = regex.test(element);
		proto[currentKey] = element
			.replace('"', "")
			.trim()
			.replace('"', "")
			.replace("{", "")
			.replace("}", "");

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
export default calendarSplitter;
