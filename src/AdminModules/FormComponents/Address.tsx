import React, { useState } from "react";
import { Form } from "react-bootstrap";

const Address = () => {
	const [houseNumber, setHouseNumber] = useState<string>("");
	const [street, setStreet] = useState<string>("");
	const [city, setCity] = useState<string>("");
	const [state, setState] = useState<string>("");
	const [postalCode, setPostalCode] = useState<string>("");
	const [neighborhood, setNeighborhood] = useState<string>("");
	const [countryCode, setCountryCode] = useState("");
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
