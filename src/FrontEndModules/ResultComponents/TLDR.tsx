import React from "react";
import Costing from "./Costing";
import Rules from "./Rules";

const TLDR = ({
	description,
	currencycode,
	price,
	costs,
	rules,
}: {
	description: string;
	currencycode: string;
	price: number;
	costs: string;
	rules: string;
}) => {
	return (
		<>
			<section id="description">
				<h3>Description</h3>
				<p>{description}</p>
			</section>
			<section className="d-flex" id="cost">
				<>
					<div className="col-1">{currencycode}</div>
					<div className="col mx-2">{price}</div>
					<div className="col-8 mx-2">
						<Costing costs={costs} />
					</div>
				</>
			</section>
			<section className="d-flex" id="rules">
				<Rules rules={rules} />
			</section>
		</>
	);
};
export default TLDR;
