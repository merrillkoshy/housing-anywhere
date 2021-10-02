import React from "react";
import { shallow } from "enzyme";
import ImagesComponent from "./ImageSpace";
import { Images } from "../../components/dataInterfaces";

describe("ImagesModule Costs module", () => {
	const files: Array<Images> = [
		{
			url: "",
		},
	];
	const ImagesModule = shallow(<ImagesComponent images={files} />);
	it("renders", () => {
		expect(ImagesModule).toMatchSnapshot();
	});
	it("should find an image", () => {
		expect(ImagesModule.find("#listing-image").exists()).toBe(true);
	});
});
