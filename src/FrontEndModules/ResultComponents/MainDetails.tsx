import { JsxElement, parseJsonText } from "typescript";

interface Searchable {
	[key: string]: string;
}
const MainDetails = ({
	alias,
	currentoccupancy,
	deposit,
	estimatedbills,
	externalreference,
	extradata,
	kind,
	maxage,
	maxbookabledays,
	minage,
	minimumstaymonths,
	moveinwindow,
	preferredgender,
	type,
}: {
	type: string;
	kind: string;
	deposit?: number;
	estimatedbills?: number;
	minimumstaymonths: string;
	maxbookabledays?: number;
	moveinwindow: number;
	currentoccupancy: number;
	minage: number;
	maxage: number;
	preferredgender: string;
	alias: string;
	externalreference: string;
	extradata: string;
}) => {
	const dataExtracter = (stringData: string) => {
		const result = stringData.replaceAll("'", "").replaceAll("\\", "");
		return result;
	};
	const ExtraData = () => {
		const toObject = dataExtracter(extradata);
		const object = JSON.parse(toObject);
		for (const key in object) {
			if (Object.prototype.hasOwnProperty.call(object, key)) {
				const element = key;
				const value = object[key];
				return (
					<div className="col mx-2">
						<strong>{element}:</strong> {value}
					</div>
				);
			} else {
				<></>;
			}
		}
		return <></>;
	};

	return (
		<div className="d-flex flex-wrap w-100 justify-content-stretch">
			<div className="col mx-2">
				<strong>Type:</strong>{" "}
				{type === "1"
					? "House"
					: type === "2"
					? "Building"
					: type === "3"
					? "Apartment"
					: ""}
			</div>
			<div className="col mx-2">
				<strong>Kind:</strong>{" "}
				{kind === "1"
					? "Entire Place"
					: kind === "2"
					? "Private Room"
					: kind === "3"
					? "Shared"
					: ""}
			</div>

			<div className="col mx-2">
				<strong>Deposit:</strong> {deposit}
			</div>
			<div className="col mx-2">
				<strong>Estimated Bills:</strong> {estimatedbills}
			</div>
			<div className="col mx-2">
				<strong>Minimum Stay:</strong> {minimumstaymonths} Months
			</div>
			<div className="col mx-2">
				<strong>Maximum Bookbale Days:</strong> {maxbookabledays} days
			</div>
			<div className="col mx-2">
				<strong>Move-In Window:</strong> {moveinwindow} days
			</div>
			<div className="col mx-2">
				<strong>Current Occupants:</strong> {currentoccupancy}
			</div>
			<div className="col mx-2">
				<strong>Min Age:</strong> {minage}
			</div>
			<div className="col mx-2">
				<strong>Max Age:</strong> {maxage}
			</div>
			<div className="col mx-2">
				<strong>Preferred Gender:</strong> {preferredgender}
			</div>
			<div className="col mx-2">
				<strong>Alias:</strong> {alias}
			</div>
			<div className="col mx-2">
				<strong>External Reference:</strong> {externalreference}
			</div>
			<ExtraData />
		</div>
	);
};
export default MainDetails;
