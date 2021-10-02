import React, { SetStateAction } from "react";
import { shallow } from "enzyme";
import Address from "./Address";

describe("Address module", () => {
	const AddressModule = shallow(
		<Address
			houseNumber={""}
			setHouseNumber={function(value: SetStateAction<string>): void {
				throw new Error("Function not implemented.");
			}}
			street={""}
			setStreet={function(value: SetStateAction<string>): void {
				throw new Error("Function not implemented.");
			}}
			city={""}
			setCity={function(value: SetStateAction<string>): void {
				throw new Error("Function not implemented.");
			}}
			state={""}
			setState={function(value: SetStateAction<string>): void {
				throw new Error("Function not implemented.");
			}}
			postalCode={""}
			setPostalCode={function(value: SetStateAction<string>): void {
				throw new Error("Function not implemented.");
			}}
			neighborhood={""}
			setNeighborhood={function(value: SetStateAction<string>): void {
				throw new Error("Function not implemented.");
			}}
			countryCode={""}
			setCountryCode={function(value: SetStateAction<string>): void {
				throw new Error("Function not implemented.");
			}}
		/>
	);
	it("renders", () => {
		expect(AddressModule).toMatchSnapshot();
	});

	it("finds a housenumber input which is a string", () => {
		expect(AddressModule.find("#housenumber").exists()).toBe(true);
	});
	it("finds a street input which is a string", () => {
		expect(AddressModule.find("#street").exists()).toBe(true);
	});
	it("finds a city input which is a string", () => {
		expect(AddressModule.find("#city").exists()).toBe(true);
	});
	it("finds a state input which is a string", () => {
		expect(AddressModule.find("#state").exists()).toBe(true);
	});
	it("finds a postalCode input which is a string", () => {
		expect(AddressModule.find("#postalCode").exists()).toBe(true);
	});
	it("finds a neighborhood input which is a string", () => {
		expect(AddressModule.find("#neighborhood").exists()).toBe(true);
	});
	it("finds a countryCode input which is a string", () => {
		expect(AddressModule.find("#countryCode").exists()).toBe(true);
	});
});
