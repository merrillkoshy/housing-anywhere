import React, { useState } from "react";
import { Form, Dropdown } from "react-bootstrap";

const Preferences = () => {
	const [minAge, setMinAge] = useState(0);
	const [maxAge, setMaxAge] = useState(0);
	const [preferredGender, setPreferredGender] = useState("No Preference");

	const [alias, setAlias] = useState("");
	const [externalReference, setExternalReference] = useState("");
	const [extraData, setExtraData] = useState("");

	return (
		<>
			<Form.Group className="mb-3">
				<Form.Label>Min Age</Form.Label>
				<Form.Control
					type="number"
					placeholder="Enter minAge"
					value={minAge}
					id="minAge"
					min={18}
					onChange={(e) => {
						e.preventDefault();
						setMinAge((e.currentTarget as HTMLInputElement).valueAsNumber);
					}}
				/>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Max Age</Form.Label>
				<Form.Control
					type="number"
					placeholder="Enter maxAge"
					value={maxAge}
					min={35}
					id="maxAge"
					onChange={(e) => {
						e.preventDefault();
						setMaxAge((e.currentTarget as HTMLInputElement).valueAsNumber);
					}}
				/>
			</Form.Group>
			<Form.Group className="mb-3">
				<Dropdown>
					<Dropdown.Toggle variant="primary" id="preferredGender">
						{preferredGender}
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setPreferredGender("male");
							}}
						>
							Male
						</Dropdown.Item>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setPreferredGender("female");
							}}
						>
							Female
						</Dropdown.Item>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setPreferredGender("other");
							}}
						>
							Other
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Alias</Form.Label>
				<Form.Control
					type="text"
					id="alias"
					value={alias}
					onChange={(e) => {
						e.preventDefault();
						setAlias(e.currentTarget.value);
					}}
					placeholder="Enter Alias"
				/>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>External Reference</Form.Label>
				<Form.Control
					type="text"
					id="externalReference"
					value={externalReference}
					onChange={(e) => {
						e.preventDefault();
						setExternalReference(e.currentTarget.value);
					}}
					placeholder="Enter External Reference"
				/>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Extra Data</Form.Label>
				<Form.Control
					type="text"
					id="extraData"
					value={extraData}
					onChange={(e) => {
						e.preventDefault();
						setExtraData(e.currentTarget.value);
					}}
					placeholder="A JSON field with extra information important for the listing which doesn't fit in other fields. Make sure to escape the quotes!"
				/>
			</Form.Group>
		</>
	);
};
export default Preferences;
