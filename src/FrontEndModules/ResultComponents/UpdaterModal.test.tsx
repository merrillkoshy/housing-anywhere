import React from "react";
import UpdaterModal from "./UpdaterModal";
import { mount } from "enzyme";
import {
	AdditionalCosts,
	Address,
	Facilities,
	HAData,
	Rules,
} from "../../components/dataInterfaces";

describe("Details Modal", () => {
	const showModal = true;
	const address: Address = {
		housenumber: "",
		street: "",
		city: "",
		state: "",
		postalCode: "",
		neighborhood: "",
		countryCode: "",
	};
	const rules: Rules = {
		pets: "",
		cleaningCommonRoomsIncluded: false,
		cleaningPrivateRoomIncluded: false,
		playMusic: "",
		smoking: "",
		couple: "",
	};
	const additionalCosts: AdditionalCosts = {
		water: false,
		gas: false,
		electricity: false,
		internet: false,
	};
	const facilities: Facilities = {
		allergyFriendly: false,
		housematesGender: "",
		registrationPossible: "",
		tenantStatus: "",
		freePlaces: 0,
		bedrooms: 0,
		bedroomFurnished: false,
		bedroomSize: 0,
		bedroomLock: false,
		balconyTerrace: "",
		basement: "",
		bathroom: "",
		garden: "",
		kitchen: "",
		livingRoom: "",
		parking: "",
		toilet: "",
		totalSize: 0,
		wheelchairAccessible: false,
		airConditioning: false,
		bed: false,
		closet: false,
		desk: false,
		dishwasher: false,
		dryer: false,
		internet: false,
		roomFurniture: "",
		tv: false,
		washingMachine: false,
		wifi: false,
		flooring: "",
		heating: "",
		kitchenware: "",
		additionalCosts: additionalCosts,
	};
	const details: HAData = {
		id: 0,
		price: 0,
		currencycode: "",
		address: address,
		type: 0,
		kind: 0,
		description: "",
		minimumstaymonths: "",
		moveinwindow: 0,
		currentoccupancy: 0,
		rules: rules,
		minage: 0,
		maxage: 0,
		preferredgender: "",
		alias: "",
		externalreference: "",
		extradata: "",
		facilities: facilities,
		calendaroperations: [],
		images: [],
		costs: [],
	};
	const DetailsModalMounted = mount(
		<UpdaterModal
			show={false}
			handleUpdaterClose={function(): void {
				throw new Error("Function not implemented.");
			}}
			details={details}
			setSending={function(value: any): void {
				throw new Error("Function not implemented.");
			}}
		/>
	);

	it("renders", () => {
		expect(DetailsModalMounted).toMatchSnapshot();
	});
	describe("Modal is opened", () => {
		const DetailsModalShown = mount(
			<UpdaterModal
				show={false}
				handleUpdaterClose={function(): void {
					throw new Error("Function not implemented.");
				}}
				details={details}
				setSending={function(value: any): void {
					throw new Error("Function not implemented.");
				}}
			/>
		);
		it("expects an open modal with id details-modal", () => {
			expect(DetailsModalShown.find("#updater-modal").exists()).toBe(true);
		});
	});
});
