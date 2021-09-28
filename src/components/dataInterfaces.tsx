import React from "react";

export interface Address {
	housenumber: string;
	street: string;
	city: string;
	state: string;
	postalCode: string;
	neighborhood: string;
	countryCode: string;
}
interface Rules {
	pets: string;
	cleaningCommonRoomsIncluded: boolean;
	cleaningPrivateRoomIncluded: boolean;
	playMusic: string;
	smoking: string;
	couple: boolean;
}

interface AdditionalCosts {
	water: boolean;
	gas: boolean;
	electricity: boolean;
	internet: boolean;
}
export interface Facilities {
	allergyFriendly: boolean;
	housematesGender: string;
	registrationPossible: boolean;
	tenantStatus: string;
	freePlaces: number;
	bedrooms: number;
	bedroomFurnished: boolean;
	bedroomSize: number;
	bedroomLock: boolean;
	balconyTerrace: string;
	basement: string;
	bathroom: string;
	garden: string;
	kitchen: string;
	livingRoom: string;
	parking: string;
	toilet: string;
	totalSize: number;
	wheelchairAccessible: boolean;
	airConditioning: boolean;
	bed: boolean;
	closet: boolean;
	desk: boolean;
	dishwasher: boolean;
	dryer: boolean;
	internet: boolean;
	roomFurniture: boolean;
	tv: boolean;
	washingMachine: boolean;
	wifi: boolean;
	flooring: string;
	heating: string;
	kitchenware: string;
	additionalCosts: AdditionalCosts;
}

interface Costs {
	type: string;
	value: number;
	payableAt: string;
	payableBy: string;
	refundable: boolean;
	estimated: boolean;
	mandatory: boolean;
}
interface Images {
	url: string;
}
interface CalendarOperations {
	type: number;
	dateFrom: string;
	dateTo: string;
}
export interface HAData {
	price: number;
	currencyCode: string;
	address: Address;
	type: number;
	kind: number;
	description: string;
	deposit?: number;
	estimatedBills?: number;
	minimumStayMonths: string;
	maxBookableDays?: number;
	moveInWindow: number;
	currentOccupancy: number;
	rules: Rules;
	minAge: number;
	maxAge: number;
	preferredGender: string;
	alias: string;
	externalReference: string;
	extraData: string;
	facilities: Facilities;
	calendarOperations: CalendarOperations[];
	images: Images[];
	costs: Costs[];
}
