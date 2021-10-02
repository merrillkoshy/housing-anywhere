import React from "react";
import { shallow } from "enzyme";
import FacilitiesComp from "./Facilities";
import { AdditionalCosts, Facilities } from "../../components/dataInterfaces";

describe("FacilitiesModule module", () => {
	const additionalCosts: AdditionalCosts = {
		water: false,
		gas: false,
		electricity: false,
		internet: false,
	};
	const facilities: Facilities = {
		allergyFriendly: false,
		housematesGender: "",
		registrationPossible: "",
		tenantStatus: "",
		freePlaces: 0,
		bedrooms: 0,
		bedroomFurnished: false,
		bedroomSize: 0,
		bedroomLock: false,
		balconyTerrace: "",
		basement: "",
		bathroom: "",
		garden: "",
		kitchen: "",
		livingRoom: "",
		parking: "",
		toilet: "",
		totalSize: 0,
		wheelchairAccessible: false,
		airConditioning: false,
		bed: false,
		closet: false,
		desk: false,
		dishwasher: false,
		dryer: false,
		internet: false,
		roomFurniture: "",
		tv: false,
		washingMachine: false,
		wifi: false,
		flooring: "",
		heating: "",
		kitchenware: "",
		additionalCosts: additionalCosts,
	};
	const FacilitiesModule = shallow(<FacilitiesComp facilites={facilities} />);
	it("renders", () => {
		expect(FacilitiesModule).toMatchSnapshot();
	});

	it("finds an li allergyFriendly", () => {
		expect(FacilitiesModule.find("#allergyFriendly").exists()).toBe(true);
	});

	it("finds an li housematesGender", () => {
		expect(FacilitiesModule.find("#housematesGender").exists()).toBe(true);
	});
	it("finds an li registrationPossible", () => {
		expect(FacilitiesModule.find("#registrationPossible").exists()).toBe(true);
	});
	it("finds an li tenantStatus", () => {
		expect(FacilitiesModule.find("#tenantStatus").exists()).toBe(true);
	});
	it("finds an li freePlaces", () => {
		expect(FacilitiesModule.find("#freePlaces").exists()).toBe(true);
	});
	it("finds an li bedrooms", () => {
		expect(FacilitiesModule.find("#bedrooms").exists()).toBe(true);
	});

	it("finds an li bedroomFurnished", () => {
		expect(FacilitiesModule.find("#bedroomFurnished").exists()).toBe(true);
	});
	it("finds an li bedroomSize", () => {
		expect(FacilitiesModule.find("#bedroomSize").exists()).toBe(true);
	});
	it("finds an li bedroomLock", () => {
		expect(FacilitiesModule.find("#bedroomLock").exists()).toBe(true);
	});
	it("finds an li balconyTerrace", () => {
		expect(FacilitiesModule.find("#balconyTerrace").exists()).toBe(true);
	});
	it("finds an li basement", () => {
		expect(FacilitiesModule.find("#basement").exists()).toBe(true);
	});
	it("finds an li bathroom", () => {
		expect(FacilitiesModule.find("#bathroom").exists()).toBe(true);
	});
	it("finds an lin garden", () => {
		expect(FacilitiesModule.find("#garden").exists()).toBe(true);
	});
	it("finds an lin kitchen", () => {
		expect(FacilitiesModule.find("#kitchen").exists()).toBe(true);
	});
	it("finds an lin livingRoom", () => {
		expect(FacilitiesModule.find("#livingRoom").exists()).toBe(true);
	});
	it("finds an lin parking", () => {
		expect(FacilitiesModule.find("#parking").exists()).toBe(true);
	});
	it("finds an lin toilet", () => {
		expect(FacilitiesModule.find("#toilet").exists()).toBe(true);
	});
	it("finds an lin totalSize", () => {
		expect(FacilitiesModule.find("#totalSize").exists()).toBe(true);
	});
	it("finds an lin wheelchairAccessible", () => {
		expect(FacilitiesModule.find("#wheelchairAccessible").exists()).toBe(true);
	});
	it("finds an lin airConditioning", () => {
		expect(FacilitiesModule.find("#airConditioning").exists()).toBe(true);
	});
	it("finds an lin bed", () => {
		expect(FacilitiesModule.find("#bed").exists()).toBe(true);
	});
	it("finds an lin closet", () => {
		expect(FacilitiesModule.find("#closet").exists()).toBe(true);
	});
	it("finds an lin desk", () => {
		expect(FacilitiesModule.find("#desk").exists()).toBe(true);
	});
	it("finds an lin dishwasher", () => {
		expect(FacilitiesModule.find("#dishwasher").exists()).toBe(true);
	});
	it("finds an lin dryer", () => {
		expect(FacilitiesModule.find("#dryer").exists()).toBe(true);
	});
	it("finds an lin internet", () => {
		expect(FacilitiesModule.find("#internet").exists()).toBe(true);
	});
	it("finds an lin roomFurniture", () => {
		expect(FacilitiesModule.find("#roomFurniture").exists()).toBe(true);
	});
	it("finds an lin tv", () => {
		expect(FacilitiesModule.find("#tv").exists()).toBe(true);
	});
	it("finds an lin washingMachine", () => {
		expect(FacilitiesModule.find("#washingMachine").exists()).toBe(true);
	});
	it("finds an lin wifi", () => {
		expect(FacilitiesModule.find("#wifi").exists()).toBe(true);
	});
	it("finds an lin flooring", () => {
		expect(FacilitiesModule.find("#flooring").exists()).toBe(true);
	});
	it("finds an lin heating", () => {
		expect(FacilitiesModule.find("#heating").exists()).toBe(true);
	});
	it("finds an lin kitchenware", () => {
		expect(FacilitiesModule.find("#kitchenware").exists()).toBe(true);
	});
});
