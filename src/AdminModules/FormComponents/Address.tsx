import React, { SetStateAction, useState } from "react";
import { Form } from "react-bootstrap";

const Address = ({
	houseNumber,
	setHouseNumber,
	street,
	setStreet,
	city,
	setCity,
	state,
	setState,
	postalCode,
	setPostalCode,
	neighborhood,
	setNeighborhood,
	countryCode,
	setCountryCode,
}: {
	houseNumber: string;
	setHouseNumber: React.Dispatch<SetStateAction<string>>;
	street: string;
	setStreet: React.Dispatch<SetStateAction<string>>;
	city: string;
	setCity: React.Dispatch<SetStateAction<string>>;
	state: string;
	setState: React.Dispatch<SetStateAction<string>>;
	postalCode: string;
	setPostalCode: React.Dispatch<SetStateAction<string>>;
	neighborhood: string;
	setNeighborhood: React.Dispatch<SetStateAction<string>>;
	countryCode: string;
	setCountryCode: React.Dispatch<SetStateAction<string>>;
}) => {
	return (
		<>
			<Form.Group className="mb-3">
				<Form.Label>House Number</Form.Label>
				<Form.Control
					type="text"
					id="housenumber"
					value={houseNumber}
					required
					onChange={(e) => {
						e.preventDefault();
						setHouseNumber(e.currentTarget.value);
					}}
					placeholder="Enter House Number"
				/>
			</Form.Group>

			<Form.Group className="mb-3">
				<Form.Label>Street</Form.Label>
				<Form.Control
					type="text"
					id="street"
					value={street}
					required
					onChange={(e) => {
						e.preventDefault();
						setStreet(e.currentTarget.value);
					}}
					placeholder="Enter Street Name"
				/>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>City</Form.Label>
				<Form.Control
					type="text"
					id="city"
					value={city}
					required
					onChange={(e) => {
						e.preventDefault();
						setCity(e.currentTarget.value);
					}}
					placeholder="Enter City Name"
				/>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>State</Form.Label>
				<Form.Control
					type="text"
					id="state"
					value={state}
					onChange={(e) => {
						e.preventDefault();
						setState(e.currentTarget.value);
					}}
					placeholder="Enter State Name"
				/>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Postal Code</Form.Label>
				<Form.Control
					type="text"
					id="postalCode"
					value={postalCode}
					required
					onChange={(e) => {
						e.preventDefault();
						setPostalCode(e.currentTarget.value);
					}}
					placeholder="Enter Postal Code"
				/>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Neighborhood</Form.Label>
				<Form.Control
					type="text"
					id="neighborhood"
					value={neighborhood}
					onChange={(e) => {
						e.preventDefault();
						setNeighborhood(e.currentTarget.value);
					}}
					placeholder="Enter Neighborhood Name"
				/>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Country Code</Form.Label>
				<Form.Control
					type="text"
					id="countryCode"
					value={countryCode}
					required
					onChange={(e) => {
						e.preventDefault();
						setCountryCode(e.currentTarget.value);
					}}
					placeholder="Enter Country Code"
				/>
			</Form.Group>
		</>
	);
};
export default Address;
