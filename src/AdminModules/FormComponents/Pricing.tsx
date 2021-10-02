import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import data from "../../components/country-currency.json";

const Pricing = ({
	price,
	setPrice,
	currencyCode,
	setCurrencyCode,
}: {
	price: number;
	setPrice: React.Dispatch<React.SetStateAction<number>>;
	currencyCode: string;
	setCurrencyCode: React.Dispatch<React.SetStateAction<string>>;
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
				if (dt.code?.toLowerCase().includes(currencyCode)) {
					return dt;
				}
				return "";
			})
		);
	};
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
					onKeyPress={checkVal}
					onChange={(e) => {
						e.preventDefault();
						if (e.currentTarget.value !== "") openPanel(true);
						setCurrencyCode(e.currentTarget.value);
					}}
					placeholder="EUR"
				/>
				<div className={`d-${panel ? "flex" : "none"} autocomplete-items`}>
					{filteredArray.length
						? filteredArray.map((ar: any, i: number) => {
								return (
									<div
										key={ar.code + i + ar.Currency}
										onClick={() => {
											setCurrencyCode(ar.code);
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
export default Pricing;
