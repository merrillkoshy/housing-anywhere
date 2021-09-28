import React, { useState } from "react";
import { Form } from "react-bootstrap";

const Pricing = () => {
	const [price, setPrice] = useState<number>(0);
	const [currencyCode, setCurrencyCode] = useState<string>("");
	return (
		<>
			<Form.Group className="mb-3">
				<Form.Label>Price</Form.Label>
				<Form.Control
					type="number"
					placeholder="Enter Price"
					value={price}
					id="price"
					required
					onChange={(e) => {
						e.preventDefault();
						setPrice((e.currentTarget as HTMLInputElement).valueAsNumber);
					}}
				/>
			</Form.Group>

			<Form.Group className="mb-3">
				<Form.Label>Currency Code</Form.Label>
				<Form.Control
					type="text"
					id="currency"
					value={currencyCode}
					required
					onChange={(e) => {
						e.preventDefault();
						setCurrencyCode(e.currentTarget.value);
					}}
					placeholder="EUR"
				/>
			</Form.Group>
		</>
	);
};
export default Pricing;
