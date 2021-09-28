import React from "react";
import { shallow } from "enzyme";
import Rules from "./Rules";

describe("Address module", () => {
	const RulesModule = shallow(<Rules />);
	it("renders", () => {
		expect(RulesModule).toMatchSnapshot();
	});
	it("finds a pets input which is a string", () => {
		expect(RulesModule.find("#pets").exists()).toBe(true);
	});
	it("finds a Cleaning CommonRooms Included input which is a bool", () => {
		expect(RulesModule.find("#cleaningCommonRoomsIncluded").exists()).toBe(
			true
		);
	});
	it("finds a Cleaning Private RoomIncluded input which is a bool", () => {
		expect(RulesModule.find("#cleaningPrivateRoomIncluded").exists()).toBe(
			true
		);
	});
	it("finds a Play Music input which is a string", () => {
		expect(RulesModule.find("#playMusic").exists()).toBe(true);
	});
	it("finds a smoking input which is a string", () => {
		expect(RulesModule.find("#smoking").exists()).toBe(true);
	});
	it("finds a couple input which is a bool", () => {
		expect(RulesModule.find("#couple").exists()).toBe(true);
	});
});
