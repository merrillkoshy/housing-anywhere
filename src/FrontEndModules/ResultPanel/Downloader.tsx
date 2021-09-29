import { CSVLink } from "react-csv";
import { Data } from "react-csv/components/CommonPropTypes";
import prepareForExport from "../../components/prepareForExport";

const Downloader = ({ data }: { data: any }) => {
	var forExport: any[] = [];
	var headers: string[] = [];
	var values: any[] = [];
	Object.keys(data[0]).map((key) => {
		return headers.push(key);
	});
	forExport.push(headers);
	data.forEach((element: {}) => {
		Object.values(element).map((val) => {
			if (typeof val === "object")
				return values.push(JSON.stringify(val).replaceAll(",", ";"));
			return values.push(val);
		});
		forExport.push(values);
	});
	return (
		<>
			<CSVLink
				filename={"pg-ha_data.csv"}
				className="btn btn-success mx-2"
				data={forExport}
			>
				Export as CSV
			</CSVLink>
		</>
	);
};
export default Downloader;
