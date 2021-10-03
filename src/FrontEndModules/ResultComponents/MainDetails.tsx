import React from "react";

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
		const result = stringData?.replaceAll("'", "")?.replaceAll("\\", "");
		return result;
	};
	const ExtraData = () => {
		const toObject = dataExtracter(extradata);

		return (
			<div className="d-flex flex-wrap col m-2  main-details">
				<strong id="extradata">Extra Data:</strong>
				{toObject}
			</div>
		);
	};

	return (
		<div className="mt-5 d-flex flex-wrap w-100 justify-content-stretch">
			<div className="d-flex flex-wrap col m-2  main-details">
				<strong id="type">Type:</strong>{" "}
				{type === "1"
					? "House"
					: type === "2"
					? "Building"
					: type === "3"
					? "Apartment"
					: ""}
			</div>
			<div className="d-flex flex-wrap col m-2  main-details">
				<strong id="kind">Kind:</strong>{" "}
				{kind === "1"
					? "Entire Place"
					: kind === "2"
					? "Private Room"
					: kind === "3"
					? "Shared"
					: ""}
			</div>

			<div className="d-flex flex-wrap col m-2  main-details">
				<strong id="deposit">Deposit:</strong> {deposit}
			</div>
			<div className="d-flex flex-wrap col m-2  main-details">
				<strong id="estimatedbills">Estimated Bills:</strong> {estimatedbills}
			</div>
			<div className="d-flex flex-wrap col m-2  main-details">
				<strong id="minimumstaymonths">Minimum Stay:</strong>{" "}
				{minimumstaymonths} Months
			</div>
			<div className="d-flex flex-wrap col m-2  main-details">
				<strong id="maxbookabledays">Maximum Bookbale Days:</strong>{" "}
				{maxbookabledays} days
			</div>
			<div className="d-flex flex-wrap col m-2  main-details">
				<strong id="moveinwindow">Move-In Window:</strong> {moveinwindow} days
			</div>
			<div className="d-flex flex-wrap col m-2  main-details">
				<strong id="currentoccupancy">Current Occupants:</strong>{" "}
				{currentoccupancy}
			</div>
			<div className="d-flex flex-wrap col m-2  main-details">
				<strong id="minage">Min Age:</strong> {minage}
			</div>
			<div className="d-flex flex-wrap col m-2  main-details">
				<strong id="maxage">Max Age:</strong> {maxage}
			</div>
			<div className="d-flex flex-wrap col m-2  main-details">
				<strong id="preferredgender">Preferred Gender:</strong>{" "}
				{preferredgender}
			</div>
			<div className="d-flex flex-wrap col m-2  main-details">
				<strong id="alias">Alias:</strong> {alias}
			</div>
			<div className="d-flex flex-wrap col m-2  main-details">
				<strong id="externalreference">External Reference:</strong>{" "}
				{externalreference}
			</div>
			<ExtraData />
		</div>
	);
};
export default MainDetails;
