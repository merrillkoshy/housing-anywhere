import React, { useState } from "react";
import { Form, Dropdown } from "react-bootstrap";

const CalendarOperations = ({
	type,
	setType,
	dateFrom,
	setDateFrom,
	dateTo,
	setDateTo,
}: {
	type: number;
	setType: React.Dispatch<React.SetStateAction<number>>;
	dateFrom: string;
	setDateFrom: React.Dispatch<React.SetStateAction<string>>;
	dateTo: string;
	setDateTo: React.Dispatch<React.SetStateAction<string>>;
}) => {
	const [asType, selectType] = useState("");

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
								setType(0);
								selectType("MarkAvailable");
							}}
						>
							Available
						</Dropdown.Item>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setType(1);
								selectType("MarkUnavailable");
							}}
						>
							Unavailable
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Date From</Form.Label>
				<Form.Control
					type="text"
					id="dateFrom"
					value={dateFrom}
					pattern={"/^d{4}-d{2}-d{2}/"}
					onChange={(e) => {
						e.preventDefault();
						setDateFrom(e.currentTarget.value);
					}}
					placeholder="YYYY-MM-DD"
				/>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Date To</Form.Label>
				<Form.Control
					type="text"
					id="dateTo"
					value={dateTo}
					pattern={"/^d{4}-d{2}-d{2}/"}
					onChange={(e) => {
						e.preventDefault();
						setDateTo(e.currentTarget.value);
					}}
					placeholder="YYYY-MM-DD"
				/>
			</Form.Group>
		</>
	);
};
export default CalendarOperations;
