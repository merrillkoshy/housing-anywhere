import React, { useState } from "react";
import { Dropdown, Form } from "react-bootstrap";

const Description = ({
	type,
	setType,
	kind,
	setKind,
	description,
	setDescription,
	deposit,
	setDeposit,
	estimatedBills,
	setEstimatedBills,
	minimumStayMonths,
	setMinimumStayMonths,
	maxBookableDays,
	setMaxBookableDays,
	moveInWindow,
	setMoveInWindow,
	currentOccupancy,
	setCurrentOccupancy,
}: {
	type: number;
	setType: React.Dispatch<React.SetStateAction<number>>;
	kind: number;
	setKind: React.Dispatch<React.SetStateAction<number>>;
	description: string;
	setDescription: React.Dispatch<React.SetStateAction<string>>;
	deposit: number;
	setDeposit: React.Dispatch<React.SetStateAction<number>>;
	estimatedBills: number;
	setEstimatedBills: React.Dispatch<React.SetStateAction<number>>;
	minimumStayMonths: string;
	setMinimumStayMonths: React.Dispatch<React.SetStateAction<string>>;
	maxBookableDays: number;
	setMaxBookableDays: React.Dispatch<React.SetStateAction<number>>;
	moveInWindow: number;
	setMoveInWindow: React.Dispatch<React.SetStateAction<number>>;
	currentOccupancy: number;
	setCurrentOccupancy: React.Dispatch<React.SetStateAction<number>>;
}) => {
	const [asType, selectedType] = useState("--");
	const [asKind, selectKind] = useState("--");

	return (
		<>
			<Form.Group className="mb-3">
				<Form.Label>Type</Form.Label>
				<Dropdown>
					<Dropdown.Toggle variant="primary" id="type">
						{asType}
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setType(1);
								selectedType("House");
							}}
						>
							House
						</Dropdown.Item>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setType(2);
								selectedType("Building");
							}}
						>
							Building
						</Dropdown.Item>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setType(3);
								selectedType("Apartment");
							}}
						>
							Apartment
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Kind</Form.Label>
				<Dropdown>
					<Dropdown.Toggle variant="primary" id="kind">
						{asKind}
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item
							type="text"
							onClick={(e) => {
								e.preventDefault();
								setKind(1);
								selectKind("EntirePlace");
							}}
						>
							Entire Place
						</Dropdown.Item>
						<Dropdown.Item
							type="text"
							onClick={(e) => {
								e.preventDefault();
								setKind(2);
								selectKind("PrivateRoom");
							}}
						>
							Private Room
						</Dropdown.Item>
						<Dropdown.Item
							type="text"
							onClick={(e) => {
								e.preventDefault();
								setKind(3);
								selectKind("SharedRoom");
							}}
						>
							Shared Room
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Description</Form.Label>
				<Form.Control
					type="text"
					id="description"
					value={description}
					required
					onChange={(e) => {
						e.preventDefault();
						setDescription(e.currentTarget.value);
					}}
					placeholder="Enter description"
				/>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Deposit</Form.Label>
				<Form.Control
					type="number"
					placeholder="Enter deposit"
					value={deposit}
					id="deposit"
					onChange={(e) => {
						e.preventDefault();
						setDeposit((e.currentTarget as HTMLInputElement).valueAsNumber);
					}}
				/>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Estimated Bills</Form.Label>
				<Form.Control
					type="number"
					placeholder="Enter estimatedBills"
					value={estimatedBills}
					id="estimatedBills"
					onChange={(e) => {
						e.preventDefault();
						setEstimatedBills(
							(e.currentTarget as HTMLInputElement).valueAsNumber
						);
					}}
				/>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Minimum Stay Months</Form.Label>
				<Form.Control
					type="text"
					id="minimumStayMonths"
					value={minimumStayMonths}
					onChange={(e) => {
						e.preventDefault();
						setMinimumStayMonths(e.currentTarget.value);
					}}
					placeholder="Enter Minimum Stay Months"
				/>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Max Bookable Days</Form.Label>
				<Form.Control
					type="number"
					placeholder="Enter Max Bookable Days"
					value={maxBookableDays}
					id="maxBookableDays"
					onChange={(e) => {
						e.preventDefault();
						setMaxBookableDays(
							(e.currentTarget as HTMLInputElement).valueAsNumber
						);
					}}
				/>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Move In Window</Form.Label>
				<Form.Control
					type="number"
					placeholder="Enter Move In Window"
					value={moveInWindow}
					id="moveInWindow"
					onChange={(e) => {
						e.preventDefault();
						setMoveInWindow(
							(e.currentTarget as HTMLInputElement).valueAsNumber
						);
					}}
				/>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Current Occupancy</Form.Label>
				<Form.Control
					type="number"
					placeholder="Enter Current Occupancy"
					value={currentOccupancy}
					id="currentOccupancy"
					onChange={(e) => {
						e.preventDefault();
						setCurrentOccupancy(
							(e.currentTarget as HTMLInputElement).valueAsNumber
						);
					}}
				/>
			</Form.Group>
		</>
	);
};
export default Description;
