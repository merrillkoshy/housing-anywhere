import React from "react";
import { CalendarOperations } from "../../components/dataInterfaces";

const Calendar = ({ calendar }: { calendar: CalendarOperations }) => {
	return (
		<div className="d-flex flex-column my-2">
			<div className="row">
				<div className="col">
					{calendar?.type ? (
						<p className="text-danger">Unavailable</p>
					) : (
						<p className="text-success">Available</p>
					)}
				</div>
			</div>
			<div className="row">
				<div className="col">
					<strong>From:</strong>
					{calendar?.dateFrom}
				</div>
				<div className="col">
					<strong>To:</strong>
					{calendar?.dateTo}
				</div>
			</div>
		</div>
	);
};
export default Calendar;
