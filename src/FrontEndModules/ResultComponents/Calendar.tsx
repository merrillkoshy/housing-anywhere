import React from "react";
import { CalendarOperations } from "../../components/dataInterfaces";
import { v4 as uuidv4 } from "uuid";

const Calendar = ({ calendar }: { calendar: Array<CalendarOperations> }) => {
	return (
		<div className="d-flex flex-column my-2">
			{calendar &&
				calendar?.map((cals) => {
					return (
						<div key={uuidv4()}>
							<div className="row">
								<div className="col">
									{cals?.type ? (
										<p id="typeCal" className="text-danger">
											Unavailable
										</p>
									) : (
										<p id="typeCal" className="text-success">
											Available
										</p>
									)}
								</div>
							</div>
							<div className="row">
								<div className="col">
									<strong id="dateFrom">From:</strong>
									{cals?.dateFrom}
								</div>
								<div className="col">
									<strong id="dateTo">To:</strong>
									{cals?.dateTo}
								</div>
							</div>
						</div>
					);
				})}
		</div>
	);
};
export default Calendar;
