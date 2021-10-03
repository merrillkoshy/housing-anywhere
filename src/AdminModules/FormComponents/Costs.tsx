import React, { useState } from "react";
import { Form, Col, Row, Dropdown, Button } from "react-bootstrap";
import Switch from "react-switch";
import { Costs } from "../../components/dataInterfaces";

const CostsComponent = ({
	type,
	setType,
	value,
	setValue,
	payableAt,
	setPayableAt,
	payableBy,
	setPayableBy,
	refundable,
	setRefundable,
	estimated,
	setEstimated,
	mandatory,
	setMandatory,
	costs,
	setCosts,
}: {
	type: string;
	setType: React.Dispatch<React.SetStateAction<string>>;
	value: number;
	setValue: React.Dispatch<React.SetStateAction<number>>;
	payableAt: string;
	setPayableAt: React.Dispatch<React.SetStateAction<string>>;
	payableBy: string;
	setPayableBy: React.Dispatch<React.SetStateAction<string>>;
	refundable: boolean;
	setRefundable: React.Dispatch<React.SetStateAction<boolean>>;
	estimated: boolean;
	setEstimated: React.Dispatch<React.SetStateAction<boolean>>;
	mandatory: boolean;
	setMandatory: React.Dispatch<React.SetStateAction<boolean>>;
	costs: Costs[];
	setCosts: React.Dispatch<React.SetStateAction<Costs[]>>;
}) => {
	const [enableAdd, setEnableAdd] = useState(false);
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
							min={0}
							id="value"
							value={value}
							disabled={payableBy === "tenant"}
							required
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
					<Form.Text className="text-muted">
						Please save after each cost entry
					</Form.Text>
					<br></br>

					<Button
						id="save"
						variant="success"
						className="my-2"
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
							setEnableAdd(true);
						}}
					>
						Save
					</Button>
					<Button
						id="addCost"
						disabled={!enableAdd}
						className="my-2"
						onClick={(e) => {
							e.preventDefault();

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
export default CostsComponent;
