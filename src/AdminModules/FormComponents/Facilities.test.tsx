import React from "react";
import { shallow } from "enzyme";
import Facilities from "./Facilities";

describe("FacilitiesModule module", () => {
	const FacilitiesModule = shallow(<Facilities />);
	it("renders", () => {
		expect(FacilitiesModule).toMatchSnapshot();
	});

	it("finds a allergyFriendly input which is a bool", () => {
		expect(FacilitiesModule.find("#allergyFriendly").exists()).toBe(true);
	});

	it("finds a housematesGender input which is a string", () => {
		expect(FacilitiesModule.find("#housematesGender").exists()).toBe(true);
	});
	it("finds a registrationPossible input which is a bool", () => {
		expect(FacilitiesModule.find("#registrationPossible").exists()).toBe(true);
	});
	it("finds a tenantStatus input which is a string", () => {
		expect(FacilitiesModule.find("#tenantStatus").exists()).toBe(true);
	});
	it("finds a freePlaces input which is a number", () => {
		expect(FacilitiesModule.find("#freePlaces").exists()).toBe(true);
	});
	it("finds a bedrooms input which is a number", () => {
		expect(FacilitiesModule.find("#bedrooms").exists()).toBe(true);
	});

	it("finds a bedroomFurnished input which is a bool", () => {
		expect(FacilitiesModule.find("#bedroomFurnished").exists()).toBe(true);
	});
	it("finds a bedroomSize input which is a bool", () => {
		expect(FacilitiesModule.find("#bedroomSize").exists()).toBe(true);
	});
	it("finds a bedroomLock input which is a bool", () => {
		expect(FacilitiesModule.find("#bedroomLock").exists()).toBe(true);
	});
	it("finds a balconyTerrace input which is a string", () => {
		expect(FacilitiesModule.find("#balconyTerrace").exists()).toBe(true);
	});
	it("finds a basement input which is a string", () => {
		expect(FacilitiesModule.find("#basement").exists()).toBe(true);
	});
	it("finds a bathroom input which is a string", () => {
		expect(FacilitiesModule.find("#bathroom").exists()).toBe(true);
	});
	it("finds an garden input which is a string", () => {
		expect(FacilitiesModule.find("#garden").exists()).toBe(true);
	});
	it("finds an kitchen input which is a string", () => {
		expect(FacilitiesModule.find("#kitchen").exists()).toBe(true);
	});
	it("finds an livingRoom input which is a string", () => {
		expect(FacilitiesModule.find("#livingRoom").exists()).toBe(true);
	});
	it("finds an parking input which is a bool", () => {
		expect(FacilitiesModule.find("#parking").exists()).toBe(true);
	});
	it("finds an toilet input which is a bool", () => {
		expect(FacilitiesModule.find("#toilet").exists()).toBe(true);
	});
	it("finds an totalSize input which is a bool", () => {
		expect(FacilitiesModule.find("#totalSize").exists()).toBe(true);
	});
	it("finds an wheelchairAccessible input which is a bool", () => {
		expect(FacilitiesModule.find("#wheelchairAccessible").exists()).toBe(true);
	});
	it("finds an airConditioning input which is a bool", () => {
		expect(FacilitiesModule.find("#airConditioning").exists()).toBe(true);
	});
	it("finds an bed input which is a bool", () => {
		expect(FacilitiesModule.find("#bed").exists()).toBe(true);
	});
	it("finds an closet input which is a bool", () => {
		expect(FacilitiesModule.find("#closet").exists()).toBe(true);
	});
	it("finds an desk input which is a bool", () => {
		expect(FacilitiesModule.find("#desk").exists()).toBe(true);
	});
	it("finds an dishwasher input which is a bool", () => {
		expect(FacilitiesModule.find("#dishwasher").exists()).toBe(true);
	});
	it("finds an dryer input which is a bool", () => {
		expect(FacilitiesModule.find("#dryer").exists()).toBe(true);
	});
	it("finds an internet input which is a bool", () => {
		expect(FacilitiesModule.find("#internet").exists()).toBe(true);
	});
	it("finds an roomFurniture input which is a bool", () => {
		expect(FacilitiesModule.find("#roomFurniture").exists()).toBe(true);
	});
	it("finds an tv input which is a bool", () => {
		expect(FacilitiesModule.find("#tv").exists()).toBe(true);
	});
	it("finds an washingMachine input which is a bool", () => {
		expect(FacilitiesModule.find("#washingMachine").exists()).toBe(true);
	});
	it("finds an wifi input which is a bool", () => {
		expect(FacilitiesModule.find("#wifi").exists()).toBe(true);
	});
	it("finds an flooring input which is a bool", () => {
		expect(FacilitiesModule.find("#flooring").exists()).toBe(true);
	});
	it("finds an heating input which is a bool", () => {
		expect(FacilitiesModule.find("#heating").exists()).toBe(true);
	});
	it("finds an kitchenware input which is a bool", () => {
		expect(FacilitiesModule.find("#kitchenware").exists()).toBe(true);
	});
});
