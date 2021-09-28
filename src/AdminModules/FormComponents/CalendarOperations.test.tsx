import React from "react";
import { shallow } from "enzyme";
import CalendarOperations from "./CalendarOperations";

describe("CostsModule module", () => {
	const CalendarOperationsModule = shallow(<CalendarOperations />);
	it("renders", () => {
		expect(CalendarOperationsModule).toMatchSnapshot();
	});

	it("finds a type input which is a number", () => {
		expect(CalendarOperationsModule.find("#type").exists()).toBe(true);
	});
	it("finds a dateFrom input which is a string", () => {
		expect(CalendarOperationsModule.find("#dateFrom").exists()).toBe(true);
	});
	it("finds a dateTo input which is a string", () => {
		expect(CalendarOperationsModule.find("#dateTo").exists()).toBe(true);
	});
});
