import React from "react";
import { shallow } from "enzyme";
import Admin from "./index";

describe("Admin panel", () => {
	const AdminPanel = shallow(<Admin />);
	it("renders", () => {
		expect(AdminPanel).toMatchSnapshot();
	});
});
