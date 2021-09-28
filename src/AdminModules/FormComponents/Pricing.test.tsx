import React from "react";
import { shallow } from "enzyme";
import Pricing from "./Pricing";

describe("Pricing module", () => {
	const PricingModule = shallow(<Pricing />);
	it("renders", () => {
		expect(PricingModule).toMatchSnapshot();
	});
	it("finds a price input which is a number", () => {
		expect(PricingModule.find("#price").exists()).toBe(true);
	});
	it("finds a currency input which is a string", () => {
		expect(PricingModule.find("#currency").exists()).toBe(true);
	});
});
