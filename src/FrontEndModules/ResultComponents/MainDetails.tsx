const MainDetails = ({
	// alias={ "the-left-room" }
	//                         currentoccupancy={ "2" }
	//                         deposit={ "24000" }
	//                         estimatedbills={ "15000" }
	//                         externalreference={ "any-identifier" }
	//                         extradata={ "'{\\\"onBoardingLink\\\":\\\"https://termsandconditions.com/uniqueId\\\"}'" }
	//                         kind={ "1" }
	//                         maxage={ "23" }
	//                         maxbookabledays={ "30" }
	//                         minage={ null }
	//                         minimumstaymonths={ "26" }
	//                         moveinwindow={ "30" }
	//                         preferredgender={ "male" }
	//                         type = { "1" }
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
	type: number;
	kind: number;
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
	return (
		<div className="d-flex flex-wrap">
			<p>
				Type:{" "}
				{type === 1
					? "House"
					: type === 2
					? "Building"
					: type === 3
					? "Apartment"
					: ""}
			</p>
			<p>
				Kind:{" "}
				{type === 1
					? "Entire Place"
					: type === 2
					? "Private Room"
					: type === 3
					? "Shared"
					: ""}
			</p>
		</div>
	);
};
export default MainDetails;
