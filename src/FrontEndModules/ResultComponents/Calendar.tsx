import React from "react";
import calendarSplitter from "../../components/calendarSplitter";

const Calendar = ({ calendar }: { calendar: string }) => {
	const calendarData = calendarSplitter(calendar);
	return (
		<div className="d-flex flex-column my-2">
			<div className="row">
				<div className="col">
					{calendarData.type ? "Unavailable" : "Available"}
				</div>
			</div>
			<div className="row">
				<div className="col">
					<strong>From:</strong>
					{calendarData.dateFrom}
				</div>
				<div className="col">
					<strong>To:</strong>
					{calendarData.dateTo}
				</div>
			</div>
		</div>
	);
};
export default Calendar;
