import addressSplitter from "./addressSplitter";
import calendarSplitter from "./calendarSplitter";
import costsSplitter from "./costsSplitter";
import rulesSplitter from "./rulesSplitter";
import facilitiesSplitter from "./facilitiesSplitter";
import imagesSplitter from "./imagesSplitter";

const sanitizeListings = (listing: any) => {
	const sanitizeEntry = (entry: {
		facilities: any;
		address: any;
		rules: any;
		calendaroperations: any;
		images: any;
		costs: any;
		extradata: any;
	}) => {
		const { proto, child } = facilitiesSplitter(entry.facilities);
		entry.address =
			entry.address !== null ? addressSplitter(entry.address) : null;
		entry.rules = entry.rules !== null ? rulesSplitter(entry.rules) : null;
		entry.facilities = proto;
		entry.facilities.additionalcosts =
			entry.facilities.additionalcosts !== null ? child : null;
		entry.calendaroperations =
			entry.calendaroperations !== null
				? calendarSplitter(entry.calendaroperations)
				: null;

		entry.images = entry.images !== null ? imagesSplitter(entry.images) : null;

		entry.costs = entry.costs !== null ? costsSplitter(entry.costs) : null;
		entry.extradata =
			entry.extradata !== null
				? entry.extradata.replaceAll("'", "").replaceAll("\\", "")
				: null;
	};
	listing.map((listed: any) => {
		return sanitizeEntry(listed);
	});
	return listing;
};
export default sanitizeListings;
