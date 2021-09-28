import React from "react";
import { shallow } from "enzyme";
import AdditionalCosts from "./AdditionalCosts";

describe("Addl Costs module", () => {
	const AdditionalCostsModule = shallow(<AdditionalCosts />);
	it("renders", () => {
		expect(AdditionalCostsModule).toMatchSnapshot();
	});
	it("finds a water input which is a bool", () => {
		expect(AdditionalCostsModule.find("#water").exists()).toBe(true);
	});
	it("finds a gas input which is a bool", () => {
		expect(AdditionalCostsModule.find("#gas").exists()).toBe(true);
	});
	it("finds a electricity input which is a bool", () => {
		expect(AdditionalCostsModule.find("#electricity").exists()).toBe(true);
	});
	it("finds an internet input which is a bool", () => {
		expect(AdditionalCostsModule.find("#internet").exists()).toBe(true);
	});
});
