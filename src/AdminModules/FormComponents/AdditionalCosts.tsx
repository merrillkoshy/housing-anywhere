import React, { useState } from "react";
import { Form, Col, Row } from "react-bootstrap";
import Switch from "react-switch";

const AdditionalCosts = () => {
	const [water, setWater] = useState(false);
	const [gas, setGas] = useState(false);
	const [electricity, setElectricity] = useState(false);
	const [internet, setInternet] = useState(false);

	return (
		<>
			<Form.Group as={Row} className="mb-3">
				<Form.Label as="legend" column>
					Water
				</Form.Label>
				<Col>
					<Switch
						id="water"
						onChange={() => {
							setWater(!water);
						}}
						checked={water}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3">
				<Form.Label as="legend" column>
					Gas
				</Form.Label>
				<Col>
					<Switch
						id="gas"
						onChange={() => {
							setGas(!gas);
						}}
						checked={gas}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3">
				<Form.Label as="legend" column>
					Electricity
				</Form.Label>
				<Col>
					<Switch
						id="electricity"
						onChange={() => {
							setElectricity(!electricity);
						}}
						checked={electricity}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3">
				<Form.Label as="legend" column>
					Internet
				</Form.Label>
				<Col>
					<Switch
						id="internet"
						onChange={() => {
							setInternet(!internet);
						}}
						checked={internet}
					/>
				</Col>
			</Form.Group>
		</>
	);
};
export default AdditionalCosts;
