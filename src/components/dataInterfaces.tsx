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
export interface Rules {
	pets: string;
	cleaningCommonRoomsIncluded: boolean;
	cleaningPrivateRoomIncluded: boolean;
	playMusic: string;
	smoking: string;
	couple: boolean;
}

export interface AdditionalCosts {
	water: boolean;
	gas: boolean;
	electricity: boolean;
	internet: boolean;
}
export interface Facilities {
	allergyFriendly: boolean;
	housematesGender: string;
	registrationPossible: boolean | string;
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
	roomFurniture: boolean | string;
	tv: boolean;
	washingMachine: boolean;
	wifi: boolean;
	flooring: string;
	heating: string;
	kitchenware: string;
	additionalCosts: AdditionalCosts;
}

export interface Costs {
	type: string;
	value: number;
	payableAt: string;
	payableBy: string;
	refundable: boolean;
	estimated: boolean;
	mandatory: boolean;
}
export interface Images {
	url: string;
}
export interface CalendarOperations {
	type: number;
	dateFrom: string;
	dateTo: string;
}
export interface HAData {
	id?: string | number;
	price: number;
	currencycode: string;
	address: Address;
	type: number;
	kind: number;
	description: string;
	deposit?: number;
	estimatedbills?: number;
	minimumstaymonths: string;
	maxbookabledays?: number;
	moveinwindow: number;
	currentoccupancy: number;
	rules: Rules;
	minage: number;
	maxage: number;
	preferredgender: string;
	alias: string;
	externalreference: string;
	extradata: string;
	facilities: Facilities;
	calendaroperations: CalendarOperations[];
	images: Images[];
	costs: Costs[];
}
