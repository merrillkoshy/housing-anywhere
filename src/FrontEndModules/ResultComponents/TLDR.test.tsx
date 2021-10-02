import React, { SetStateAction } from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom/extend-expect";
import TLDR from "./TLDR";
import { Rules } from "../../components/dataInterfaces";

describe("Description module", () => {
	const rules: Rules = {
		pets: "",
		cleaningCommonRoomsIncluded: false,
		cleaningPrivateRoomIncluded: false,
		playMusic: "",
		smoking: "",
		couple: false,
	};
	const TLDRModule = shallow(
		<TLDR
			description={""}
			currencycode={""}
			price={0}
			costs={[]}
			rules={rules}
		/>
	);
	it("renders", () => {
		expect(TLDRModule).toMatchSnapshot();
	});

	it("finds a description paragraph", () => {
		expect(TLDRModule.find("#description").exists()).toBe(true);
	});
	it("finds a currencycode div", () => {
		expect(TLDRModule.find("#currencycode").exists()).toBe(true);
	});
	it("finds a price div", () => {
		expect(TLDRModule.find("#price").exists()).toBe(true);
	});
});
