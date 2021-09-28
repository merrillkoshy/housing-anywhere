import React, { useState } from "react";
import { Form, Col, Row, Dropdown, Button } from "react-bootstrap";
import Switch from "react-switch";

const Costs = () => {
	const [type, setType] = useState("");
	const [value, setValue] = useState(0);
	const [payableAt, setPayableAt] = useState("");
	const [payableBy, setPayableBy] = useState("");
	const [refundable, setRefundable] = useState(false);
	const [estimated, setEstimated] = useState(false);
	const [mandatory, setMandatory] = useState(false);
	const [costs, setCosts] = useState<object[]>([]);
	return (
		<>
			<Form.Group className="mb-3">
				<Form.Label>Cost Type</Form.Label>
				<Dropdown id="type-dropdown">
					<Dropdown.Toggle variant="primary" id="costtype">
						{type}
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setType("security-deposit");
							}}
						>
							Security Deposit
						</Dropdown.Item>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setType("bedding-deposit");
							}}
						>
							Bedding Deposit
						</Dropdown.Item>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setType("towel-deposit");
							}}
						>
							Towel Deposit
						</Dropdown.Item>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setType("other-deposit");
							}}
						>
							Other Deposit
						</Dropdown.Item>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setType("administration-fee");
							}}
						>
							Administration Fee
						</Dropdown.Item>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setType("utility-bills");
							}}
						>
							Utility Bills
						</Dropdown.Item>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setType("water-bill");
							}}
						>
							Water Bill
						</Dropdown.Item>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setType("gas-bill");
							}}
						>
							Gas Bill
						</Dropdown.Item>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setType("electricity-bill");
							}}
						>
							Electricity Bill
						</Dropdown.Item>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setType("internet-bill");
							}}
						>
							Internet Bill
						</Dropdown.Item>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setType("final-cleaning");
							}}
						>
							Final Cleaning
						</Dropdown.Item>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setType("cleaning-service");
							}}
						>
							Cleaning Service
						</Dropdown.Item>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setType("overnight-guests");
							}}
						>
							Overnight Guests
						</Dropdown.Item>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setType("other-optional-costs");
							}}
						>
							Other Optional Costs
						</Dropdown.Item>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setType("early-move-in");
							}}
						>
							Early Move In
						</Dropdown.Item>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setType("late-move-in");
							}}
						>
							Late Move In
						</Dropdown.Item>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setType("late-move-out");
							}}
						>
							Late Move Out
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</Form.Group>
			{type !== "" ? (
				<>
					<Form.Group className="mb-3">
						<Form.Label>Value</Form.Label>
						<Form.Control
							type="number"
							id="value"
							value={value}
							disabled={payableBy === "tenant"}
							onChange={(e) => {
								e.preventDefault();
								setValue((e.currentTarget as HTMLInputElement).valueAsNumber);
							}}
							placeholder="value?"
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Payable At</Form.Label>
						<Dropdown>
							<Dropdown.Toggle variant="primary" id="payableAt">
								{payableAt}
							</Dropdown.Toggle>

							<Dropdown.Menu>
								<Dropdown.Item
									onClick={(e) => {
										e.preventDefault();
										setPayableAt("move-in");
									}}
								>
									Move-In
								</Dropdown.Item>
								<Dropdown.Item
									onClick={(e) => {
										e.preventDefault();
										setPayableAt("move-out");
									}}
								>
									Move-Out
								</Dropdown.Item>
								<Dropdown.Item
									onClick={(e) => {
										e.preventDefault();
										setPayableAt("one-off");
									}}
								>
									One-Off
								</Dropdown.Item>
								<Dropdown.Item
									onClick={(e) => {
										e.preventDefault();
										setPayableAt("monthly");
									}}
								>
									Monthly
								</Dropdown.Item>
								<Dropdown.Item
									onClick={(e) => {
										e.preventDefault();
										setPayableAt("bi-weekly");
									}}
								>
									Bi-Weekly
								</Dropdown.Item>
								<Dropdown.Item
									onClick={(e) => {
										e.preventDefault();
										setPayableAt("weekly");
									}}
								>
									Weekly
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Payable By</Form.Label>
						<Dropdown>
							<Dropdown.Toggle variant="primary" id="payableBy">
								{payableBy}
							</Dropdown.Toggle>

							<Dropdown.Menu>
								<Dropdown.Item
									onClick={(e) => {
										e.preventDefault();
										setValue(0);
										setPayableBy("tenant");
									}}
								>
									Tenant
								</Dropdown.Item>
								<Dropdown.Item
									onClick={(e) => {
										e.preventDefault();
										setPayableBy("included-in-rent");
									}}
								>
									Included in Rent
								</Dropdown.Item>
								<Dropdown.Item
									onClick={(e) => {
										e.preventDefault();
										setPayableBy("not-applicable");
									}}
								>
									NA
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
						<Form.Control
							type="text"
							id="payableBy"
							value={payableBy}
							onChange={(e) => {
								e.preventDefault();
								setPayableBy(e.currentTarget.value);
							}}
							placeholder="payableBy?"
						/>
					</Form.Group>

					<Form.Group as={Row} className="mb-3">
						<Form.Label as="legend" column>
							Refundable
						</Form.Label>
						<Col>
							<Switch
								id="refundable"
								onChange={() => {
									setRefundable(!refundable);
								}}
								checked={refundable}
							/>
						</Col>
					</Form.Group>
					<Form.Group as={Row} className="mb-3">
						<Form.Label as="legend" column>
							Estimated
						</Form.Label>
						<Col>
							<Switch
								id="estimated"
								onChange={() => {
									setEstimated(!estimated);
								}}
								checked={estimated}
							/>
						</Col>
					</Form.Group>
					<Form.Group as={Row} className="mb-3">
						<Form.Label as="legend" column>
							Mandatory
						</Form.Label>
						<Col>
							<Switch
								id="mandatory"
								onChange={() => {
									setMandatory(!mandatory);
								}}
								checked={mandatory}
							/>
						</Col>
					</Form.Group>
					<Button
						id="addCost"
						disabled={type === "" && payableAt === "" && payableBy === ""}
						onClick={(e) => {
							e.preventDefault();
							setCosts((prev) => [
								{
									type: type,
									value: value,
									payableAt: payableAt,
									payableBy: payableBy,
									refundable: refundable,
									estimated: estimated,
									mandatory: mandatory,
								},
								...prev,
							]);
							setType("");
						}}
					>
						Add Another Cost
					</Button>
				</>
			) : (
				""
			)}
		</>
	);
};
export default Costs;
