import React from "react";
import { Costs } from "../../components/dataInterfaces";
import { v4 as uuidv4 } from "uuid";

const Costing = ({ costsArray }: { costsArray: Array<Costs> }) => {
	console.log(costsArray);
	return (
		<details>
			<summary>
				<strong>Costs</strong>
			</summary>
			{costsArray &&
				costsArray?.map((costs) => {
					return (
						<ul key={uuidv4()}>
							<li id="costtype">Type:{costs?.type}</li>
							<li id="value">Value:{costs?.value}</li>
							<li id="payableAt">Payable At:{costs?.payableAt}</li>
							<li id="payableBy">Payable By:{costs?.payableBy}</li>
							<li id="refundable">
								Refundable:{costs?.refundable ? "✅" : "❌"}
							</li>
							<li id="estimated">Estimated:{costs?.estimated ? "✅" : "❌"}</li>
							<li id="mandatory">Mandatory:{costs?.mandatory ? "✅" : "❌"}</li>
						</ul>
					);
				})}
		</details>
	);
};
export default Costing;
