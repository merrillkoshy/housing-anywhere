import React from "react";
import { shallow } from "enzyme";
import AdditionalCosts from "./AdditionalCosts";

describe("Addl Costs module", () => {
	const AdditionalCostsModule = shallow(<AdditionalCosts costs={undefined} />);
	it("renders", () => {
		expect(AdditionalCostsModule).toMatchSnapshot();
	});
	it("finds an li with id water", () => {
		expect(AdditionalCostsModule.find("#water").exists()).toBe(true);
	});
	it("finds an li with id gas", () => {
		expect(AdditionalCostsModule.find("#gas").exists()).toBe(true);
	});
	it("finds an li with id electricity", () => {
		expect(AdditionalCostsModule.find("#electricity").exists()).toBe(true);
	});
	it("finds an li with id internet", () => {
		expect(AdditionalCostsModule.find("#internet").exists()).toBe(true);
	});
});
