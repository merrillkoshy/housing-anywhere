import React, { SetStateAction } from "react";
import { mount, shallow } from "enzyme";
import Costing from "./Costing";
import { Costs } from "../../components/dataInterfaces";

describe("CostsModule module", () => {
	const costingValue: Array<Costs> = [
		{
			type: "",
			value: 0,
			payableAt: "",
			payableBy: "",
			refundable: false,
			estimated: false,
			mandatory: false,
		},
	];
	const CostsModule = shallow(<Costing costsArray={costingValue} />);
	it("renders", () => {
		expect(CostsModule).toMatchSnapshot();
	});
	it("finds an li type", () => {
		expect(CostsModule.find("#costtype").exists()).toBe(true);
	});

	it("finds an li value", () => {
		expect(CostsModule.find("#value").exists()).toBe(true);
	});
	it("finds an li payableAt", () => {
		expect(CostsModule.find("#payableAt").exists()).toBe(true);
	});
	it("finds an li payableBy", () => {
		expect(CostsModule.find("#payableBy").exists()).toBe(true);
	});
	it("finds an li refundable", () => {
		expect(CostsModule.find("#refundable").exists()).toBe(true);
	});
	it("finds an lin estimated", () => {
		expect(CostsModule.find("#estimated").exists()).toBe(true);
	});
	it("finds an li mandatory", () => {
		expect(CostsModule.find("#mandatory").exists()).toBe(true);
	});
});
