import React, { SetStateAction } from "react";
import { shallow } from "enzyme";
import Rules from "./Rules";

describe("Address module", () => {
	const RulesModule = shallow(
		<Rules
			pets={""}
			setPets={function(value: SetStateAction<string>): void {
				throw new Error("Function not implemented.");
			}}
			cleaningCommonRoomsIncluded={false}
			setCleaningCommonRoomsIncluded={function(
				value: SetStateAction<boolean>
			): void {
				throw new Error("Function not implemented.");
			}}
			cleaningPrivateRoomIncluded={false}
			setCleaningPrivateRoomIncluded={function(
				value: SetStateAction<boolean>
			): void {
				throw new Error("Function not implemented.");
			}}
			playMusic={""}
			setPlayMusic={function(value: SetStateAction<string>): void {
				throw new Error("Function not implemented.");
			}}
			smoking={""}
			setSmoking={function(value: SetStateAction<string>): void {
				throw new Error("Function not implemented.");
			}}
			couple={false}
			setCouple={function(value: SetStateAction<boolean>): void {
				throw new Error("Function not implemented.");
			}}
		/>
	);
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
