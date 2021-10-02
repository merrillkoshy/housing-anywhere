import React from "react";
import { shallow } from "enzyme";
import Calendar from "./Calendar";
import { CalendarOperations } from "../../components/dataInterfaces";

describe("CostsModule module", () => {
	const calendarValue: Array<CalendarOperations> = [
		{
			type: 0,
			dateFrom: "",
			dateTo: "",
		},
	];
	const CalendarOperationsModule = shallow(
		<Calendar calendar={calendarValue} />
	);
	it("renders", () => {
		expect(CalendarOperationsModule).toMatchSnapshot();
	});

	it("finds an li typeCal", () => {
		expect(CalendarOperationsModule.find("#typeCal").exists()).toBe(true);
	});
	it("finds an li dateFrom", () => {
		expect(CalendarOperationsModule.find("#dateFrom").exists()).toBe(true);
	});
	it("finds an li dateTo", () => {
		expect(CalendarOperationsModule.find("#dateTo").exists()).toBe(true);
	});
});
