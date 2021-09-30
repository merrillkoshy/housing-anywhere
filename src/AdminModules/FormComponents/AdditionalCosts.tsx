import React, { useState } from "react";
import { Form, Col, Row } from "react-bootstrap";
import Switch from "react-switch";

const AdditionalCosts = ({
	water,
	setWater,
	gas,
	setGas,
	electricity,
	setElectricity,
	internet,
	setInternet,
}: {
	water: boolean;
	setWater: React.Dispatch<React.SetStateAction<boolean>>;
	gas: boolean;
	setGas: React.Dispatch<React.SetStateAction<boolean>>;
	electricity: boolean;
	setElectricity: React.Dispatch<React.SetStateAction<boolean>>;
	internet: boolean;
	setInternet: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	return (
		<>
			<header>Additional Costs</header>
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
