import React, { SetStateAction } from "react";
import { mount, shallow } from "enzyme";
import CostsComponent from "./Costs";
import { Costs } from "../../components/dataInterfaces";

describe("CostsModule module", () => {
	const CostsModule = shallow(
		<CostsComponent
			type={""}
			setType={function(value: SetStateAction<string>): void {
				throw new Error("Function not implemented.");
			}}
			value={0}
			setValue={function(value: SetStateAction<number>): void {
				throw new Error("Function not implemented.");
			}}
			payableAt={""}
			setPayableAt={function(value: SetStateAction<string>): void {
				throw new Error("Function not implemented.");
			}}
			payableBy={""}
			setPayableBy={function(value: SetStateAction<string>): void {
				throw new Error("Function not implemented.");
			}}
			refundable={false}
			setRefundable={function(value: SetStateAction<boolean>): void {
				throw new Error("Function not implemented.");
			}}
			estimated={false}
			setEstimated={function(value: SetStateAction<boolean>): void {
				throw new Error("Function not implemented.");
			}}
			mandatory={false}
			setMandatory={function(value: SetStateAction<boolean>): void {
				throw new Error("Function not implemented.");
			}}
			costs={[]}
			setCosts={function(value: SetStateAction<Costs[]>): void {
				throw new Error("Function not implemented.");
			}}
		/>
	);
	it("renders", () => {
		expect(CostsModule).toMatchSnapshot();
	});
	it("finds a type input which is a string", () => {
		expect(CostsModule.find("#costtype").exists()).toBe(true);
	});

	// describe("when type is prescribed", () => {
	// 	const mockMyEventHandler = jest.fn();

	// 	const CostsModuleMounted = mount(<Costs />);
	// 	CostsModuleMounted.setProps({ onChange: mockMyEventHandler });

	// 	expect(mockMyEventHandler).toHaveBeenCalledWith(["val"]);

	// 	beforeEach(() => {});

	// 	afterEach(() => {
	// 		// CostsModule.setState({ type: "" });
	// 	});
	// 	it("finds a value input which is a number", () => {
	// 		expect(CostsModuleMounted.find("#value").exists()).toBe(true);
	// 	});
	// 	it("finds a payableAt input which is a string", () => {
	// 		expect(CostsModuleMounted.find("#payableAt").exists()).toBe(true);
	// 	});
	// 	it("finds a payableBy input which is a string", () => {
	// 		expect(CostsModuleMounted.find("#payableBy").exists()).toBe(true);
	// 	});
	// 	it("finds a refundable input which is a bool", () => {
	// 		expect(CostsModuleMounted.find("#refundable").exists()).toBe(true);
	// 	});
	// 	it("finds an estimated input which is a bool", () => {
	// 		expect(CostsModuleMounted.find("#estimated").exists()).toBe(true);
	// 	});
	// 	it("finds a mandatory input which is a bool", () => {
	// 		expect(CostsModuleMounted.find("#mandatory").exists()).toBe(true);
	// 	});
	// });
});
