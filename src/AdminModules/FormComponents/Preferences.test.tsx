import React from "react";
import { shallow } from "enzyme";
import Preferences from "./Preferences";

describe("Preferences module", () => {
	const PreferencesModule = shallow(<Preferences />);
	it("renders", () => {
		expect(PreferencesModule).toMatchSnapshot();
	});
	it("finds a minAge input which is a number", () => {
		expect(PreferencesModule.find("#minAge").exists()).toBe(true);
	});
	it("finds a maxAge input which is a number", () => {
		expect(PreferencesModule.find("#maxAge").exists()).toBe(true);
	});
	it("finds a preferredGender input which is a string", () => {
		expect(PreferencesModule.find("#preferredGender").exists()).toBe(true);
	});
	it("finds a alias input which is a string", () => {
		expect(PreferencesModule.find("#alias").exists()).toBe(true);
	});
	it("finds a externalReference input which is a string", () => {
		expect(PreferencesModule.find("#externalReference").exists()).toBe(true);
	});
	it("finds a extraData input which is a string", () => {
		expect(PreferencesModule.find("#extraData").exists()).toBe(true);
	});
});
