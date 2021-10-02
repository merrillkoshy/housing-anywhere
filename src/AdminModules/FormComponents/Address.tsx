import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import data from "../../components/country-codes.json";

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
	setHouseNumber: React.Dispatch<React.SetStateAction<string>>;
	street: string;
	setStreet: React.Dispatch<React.SetStateAction<string>>;
	city: string;
	setCity: React.Dispatch<React.SetStateAction<string>>;
	state: string;
	setState: React.Dispatch<React.SetStateAction<string>>;
	postalCode: string;
	setPostalCode: React.Dispatch<React.SetStateAction<string>>;
	neighborhood: string;
	setNeighborhood: React.Dispatch<React.SetStateAction<string>>;
	countryCode: string;
	setCountryCode: React.Dispatch<React.SetStateAction<string>>;
}) => {
	const [filteredArray, setFilteredArray] = useState<any>([]);
	const [panel, openPanel] = useState(false);
	useEffect(() => {
		return () => {
			setFilteredArray([]);
			openPanel(false);
		};
	}, []);
	const checkVal = () => {
		setFilteredArray(
			data.filter((dt: any) => {
				if (dt.name?.toLowerCase().includes(countryCode)) {
					return dt;
				}
				return "";
			})
		);
	};
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
					onKeyPress={checkVal}
					onChange={(e) => {
						e.preventDefault();
						if (e.currentTarget.value !== "") openPanel(true);
						setCountryCode(e.currentTarget.value);
					}}
					placeholder="Just type your Country name, we'll fetch your code"
				/>
				<div className={`d-${panel ? "flex" : "none"} autocomplete-items`}>
					{filteredArray.length
						? filteredArray.map((ar: any, i: number) => {
								return (
									<div
										key={ar.code + i}
										onClick={() => {
											setCountryCode(ar.code);
											setFilteredArray([]);
											openPanel(false);
										}}
									>
										{new Set(ar.code)}
									</div>
								);
						  })
						: null}
				</div>
			</Form.Group>
		</>
	);
};
export default Address;
