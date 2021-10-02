import React, { SetStateAction } from "react";
import { shallow } from "enzyme";
import CalendarOperations from "./CalendarOperations";

describe("CostsModule module", () => {
	const CalendarOperationsModule = shallow(
		<CalendarOperations
			type={0}
			setType={function(value: SetStateAction<number>): void {
				throw new Error("Function not implemented.");
			}}
			dateFrom={""}
			setDateFrom={function(value: SetStateAction<string>): void {
				throw new Error("Function not implemented.");
			}}
			dateTo={""}
			setDateTo={function(value: SetStateAction<string>): void {
				throw new Error("Function not implemented.");
			}}
		/>
	);
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
