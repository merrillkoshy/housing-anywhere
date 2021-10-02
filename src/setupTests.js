/* eslint-disable import/no-extraneous-dependencies */
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import replaceAllInserter from "string.prototype.replaceall";

replaceAllInserter.shim();

Enzyme.configure({ adapter: new Adapter() });
