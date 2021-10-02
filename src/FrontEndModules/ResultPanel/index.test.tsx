import React from "react";
import { shallow } from "enzyme";
import Result from ".";

describe("Result Panel", () => {
	const ResultModule = shallow(<Result />);
	it("renders", () => {
		expect(ResultModule).toMatchSnapshot();
	});
	it("finds the panel section", () => {
		expect(ResultModule.find("section").prop("id")).toEqual("result-panel");
	});
});
