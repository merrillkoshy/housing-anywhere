import { CSVLink } from "react-csv";

const Downloader = ({ data }: { data: any }) => {
	var forExport: any[] = [];
	var headers: string[] = [];
	var values: any[] = [];

	if (data !== undefined && data !== null && data.length !== 0) {
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
	}
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
