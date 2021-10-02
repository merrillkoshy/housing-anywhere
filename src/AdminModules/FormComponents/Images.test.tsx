import React from "react";
import { shallow } from "enzyme";
import Images from "./Images";

describe("ImagesModule Costs module", () => {
	const ImagesModule = shallow(
		<Images
			files={undefined}
			setFiles={function(value: any): void {
				throw new Error("Function not implemented.");
			}}
		/>
	);
	it("renders", () => {
		expect(ImagesModule).toMatchSnapshot();
	});
	it("should have a dropzone for images", () => {
		expect(ImagesModule.find("#image-dropzone").exists()).toBe(true);
	});
});
