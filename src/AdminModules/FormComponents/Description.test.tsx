import React, { SetStateAction } from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom/extend-expect";
import Description from "./Description";

describe("Description module", () => {
	const DescriptionModule = shallow(
		<Description
			type={0}
			setType={function(value: SetStateAction<number>): void {
				throw new Error("Function not implemented.");
			}}
			kind={0}
			setKind={function(value: SetStateAction<number>): void {
				throw new Error("Function not implemented.");
			}}
			description={""}
			setDescription={function(value: SetStateAction<string>): void {
				throw new Error("Function not implemented.");
			}}
			deposit={0}
			setDeposit={function(value: SetStateAction<number>): void {
				throw new Error("Function not implemented.");
			}}
			estimatedBills={0}
			setEstimatedBills={function(value: SetStateAction<number>): void {
				throw new Error("Function not implemented.");
			}}
			minimumStayMonths={""}
			setMinimumStayMonths={function(value: SetStateAction<string>): void {
				throw new Error("Function not implemented.");
			}}
			maxBookableDays={0}
			setMaxBookableDays={function(value: SetStateAction<number>): void {
				throw new Error("Function not implemented.");
			}}
			moveInWindow={0}
			setMoveInWindow={function(value: SetStateAction<number>): void {
				throw new Error("Function not implemented.");
			}}
			currentOccupancy={0}
			setCurrentOccupancy={function(value: SetStateAction<number>): void {
				throw new Error("Function not implemented.");
			}}
		/>
	);
	it("renders", () => {
		expect(DescriptionModule).toMatchSnapshot();
	});

	it("finds a type input", () => {
		expect(DescriptionModule.find("#type").exists()).toBe(true);
	});
	it("finds a kind input", () => {
		expect(DescriptionModule.find("#kind").exists()).toBe(true);
	});
	it("finds a description input which is a string", () => {
		expect(DescriptionModule.find("#description").prop("type")).toEqual("text");
	});
	it("finds an deposit input which is a number", () => {
		expect(DescriptionModule.find("#deposit").prop("type")).toEqual("number");
	});
	it("finds an estimatedBills input which is a number", () => {
		expect(DescriptionModule.find("#estimatedBills").prop("type")).toEqual(
			"number"
		);
	});
	it("finds an minimumStayMonths input which is a string", () => {
		expect(DescriptionModule.find("#minimumStayMonths").prop("type")).toEqual(
			"text"
		);
	});
	it("finds an maxBookableDays input which is a number", () => {
		expect(DescriptionModule.find("#maxBookableDays").prop("type")).toEqual(
			"number"
		);
	});
	it("finds an moveInWindow input which is a number", () => {
		expect(DescriptionModule.find("#moveInWindow").prop("type")).toEqual(
			"number"
		);
	});
	it("finds an currentOccupancy input which is a number", () => {
		expect(DescriptionModule.find("#currentOccupancy").prop("type")).toEqual(
			"number"
		);
	});
});
