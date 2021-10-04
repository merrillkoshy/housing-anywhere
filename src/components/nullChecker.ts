const nullChecker = (data: any) => {
	const returnable = Object.values(data).filter((val: any, i: number) => {
		if (Array.isArray(val)) {
			if (val.length !== 0) return val;
		} else {
			switch (typeof val) {
				case "number":
					if (val !== 0) return val;

					break;
				case "string":
					if (val !== null) return val;

					break;
				case "object":
					nullChecker(val);
					break;
				default:
					break;
			}
		}
		return val;
	});
	return returnable.length;
};
export default nullChecker;
