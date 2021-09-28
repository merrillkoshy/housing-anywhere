import costsSplitter from "../../components/costsSplitter";

const Costing = ({ costs }: { costs: string }) => {
	const costing = costsSplitter(costs);

	return (
		<details>
			<summary>
				<strong>Costs</strong>
			</summary>
			<ul>
				<li>Type:{costing.type}</li>
				<li>Value:{costing.value}</li>
				<li>Payable At:{costing.payableAt}</li>
				<li>Payable By:{costing.payableBy}</li>
				<li>Refundable:{costing.refundable ? "✅" : "❌"}</li>
				<li>Estimated:{costing.estimated ? "✅" : "❌"}</li>
				<li>Mandatory:{costing.mandatory ? "✅" : "❌"}</li>
			</ul>
		</details>
	);
};
export default Costing;
