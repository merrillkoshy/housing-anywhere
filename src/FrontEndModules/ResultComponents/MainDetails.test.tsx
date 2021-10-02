import React from "react";
import { shallow } from "enzyme";
import MainDetails from "./MainDetails";

describe("MainDetails Costs module", () => {
	const MainDetailsComponent = shallow(
		<MainDetails
			type={""}
			kind={""}
			minimumstaymonths={""}
			moveinwindow={0}
			currentoccupancy={0}
			minage={0}
			maxage={0}
			preferredgender={""}
			alias={""}
			externalreference={""}
			extradata={""}
		/>
	);
	it("renders", () => {
		expect(MainDetailsComponent).toMatchSnapshot();
	});

	it("finds an li type", () => {
		expect(MainDetailsComponent.find("#type").exists()).toBe(true);
	});
	it("finds an li kind", () => {
		expect(MainDetailsComponent.find("#kind").exists()).toBe(true);
	});
	it("finds an li minimumstaymonths", () => {
		expect(MainDetailsComponent.find("#minimumstaymonths").exists()).toBe(true);
	});
	it("finds an li moveinwindow", () => {
		expect(MainDetailsComponent.find("#moveinwindow").exists()).toBe(true);
	});
	it("finds an li currentoccupancy", () => {
		expect(MainDetailsComponent.find("#currentoccupancy").exists()).toBe(true);
	});
	it("finds an li minage", () => {
		expect(MainDetailsComponent.find("#minage").exists()).toBe(true);
	});
	it("finds an li maxage", () => {
		expect(MainDetailsComponent.find("#maxage").exists()).toBe(true);
	});
	it("finds an li preferredgender", () => {
		expect(MainDetailsComponent.find("#preferredgender").exists()).toBe(true);
	});
	it("finds an li alias", () => {
		expect(MainDetailsComponent.find("#alias").exists()).toBe(true);
	});
	it("finds an li externalreference", () => {
		expect(MainDetailsComponent.find("#externalreference").exists()).toBe(true);
	});
});
