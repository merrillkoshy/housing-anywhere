import React from "react";

import { Address } from "../../components/dataInterfaces";

const Title = ({ address }: { address: Address }) => {
	return (
		<div className="d-flex flex-column">
			<h1>{address?.neighborhood ? address?.neighborhood : address?.street}</h1>
			<ul className="d-flex flex-row justify-content-evenly m-0 p-0 w-100 flex-wrap">
				<li>{address?.city}</li>
				<li>{address?.street}</li>
				<li>{address?.neighborhood}</li>
			</ul>
		</div>
	);
};
export default Title;
