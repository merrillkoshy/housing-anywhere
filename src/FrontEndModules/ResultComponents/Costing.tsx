import React from "react";
import { Costs } from "../../components/dataInterfaces";

const costs = ({ costs }: { costs: Costs }) => {
	return (
		<details>
			<summary>
				<strong>Costs</strong>
			</summary>
			<ul>
				<li>Type:{costs?.type}</li>
				<li>Value:{costs?.value}</li>
				<li>Payable At:{costs?.payableAt}</li>
				<li>Payable By:{costs?.payableBy}</li>
				<li>Refundable:{costs?.refundable ? "✅" : "❌"}</li>
				<li>Estimated:{costs?.estimated ? "✅" : "❌"}</li>
				<li>Mandatory:{costs?.mandatory ? "✅" : "❌"}</li>
			</ul>
		</details>
	);
};
export default costs;
