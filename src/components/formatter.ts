const formatter = (element: any): string => {
	var temp = "";
	Object.values(element).map((val: any, i: number) => {
		if (i !== Object.keys(element).length - 1) {
			if (val === "") return (temp = temp + "null,");
			return (temp = temp + val.toString() + ",");
		}
		if (typeof val === "object")
			return (temp = temp + '"' + formatter(val) + '"');
		if (val === "") return (temp = temp + "null");
		return (temp = temp + val);
	});
	return "(" + temp + ")";
};
const arrayformatter = (element: any): any[] => {
	var temp = "";
	var innertemp = [];
	innertemp.push(
		element.map((el: any) => {
			Object.values(el).map((val: any, i: number) => {
				if (i !== Object.keys(el).length - 1)
					return (temp = temp + val.toString() + ",");
				return (temp = temp + val);
			});
			return "(" + temp + ")";
		})
	);

	return innertemp.flat();
};
const formatters = { formatter, arrayformatter };
export default formatters;
