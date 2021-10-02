import React from "react";
import { Costs, Rules } from "../../components/dataInterfaces";
import Costing from "./Costing";
import RulesComponent from "./Rules";

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
	costs: Costs[];
	rules: Rules;
}) => {
	return (
		<>
			<section id="description">
				<h3>Description</h3>
				<p id="description">{description}</p>
			</section>
			<section className="d-flex" id="cost">
				<>
					<div className="col-1 pricing-text">
						<strong id="currencycode">{currencycode}</strong>
					</div>
					<div className="col mx-2 pricing-text">
						<strong id="price">
							{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
						</strong>
					</div>
					<div className="col-8 mx-2 ">
						<Costing costsArray={costs} />
					</div>
				</>
			</section>
			<section className="d-flex" id="rules">
				<RulesComponent rules={rules} />
			</section>
		</>
	);
};
export default TLDR;
