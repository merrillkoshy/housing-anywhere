import React, { SetStateAction } from "react";
import { shallow } from "enzyme";
import RulesComponent from "./Rules";
import { Rules } from "../../components/dataInterfaces";

describe("Address module", () => {
	const rules: Rules = {
		pets: "",
		cleaningCommonRoomsIncluded: false,
		cleaningPrivateRoomIncluded: false,
		playMusic: "",
		smoking: "",
		couple: false,
	};
	const RulesModule = shallow(<RulesComponent rules={rules} />);
	it("renders", () => {
		expect(RulesModule).toMatchSnapshot();
	});
	it("finds an li pets", () => {
		expect(RulesModule.find("#pets").exists()).toBe(true);
	});
	it("finds an li Cleaning CommonRooms Included", () => {
		expect(RulesModule.find("#cleaningCommonRoomsIncluded").exists()).toBe(
			true
		);
	});
	it("finds an li Cleaning Private RoomIncluded", () => {
		expect(RulesModule.find("#cleaningPrivateRoomIncluded").exists()).toBe(
			true
		);
	});
	it("finds an li Play Music", () => {
		expect(RulesModule.find("#playMusic").exists()).toBe(true);
	});
	it("finds an li smoking", () => {
		expect(RulesModule.find("#smoking").exists()).toBe(true);
	});
	it("finds an li couple", () => {
		expect(RulesModule.find("#couple").exists()).toBe(true);
	});
});
