import React from "react";
import { shallow } from "enzyme";
import Images from "./Images";

describe("ImagesModule Costs module", () => {
	const ImagesModule = shallow(<Images />);
	it("renders", () => {
		expect(ImagesModule).toMatchSnapshot();
	});
	it("should have a dropzone for images", () => {
		expect(ImagesModule.find("#image-dropzone").exists()).toBe(true);
	});
});
