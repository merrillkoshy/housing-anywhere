import React from "react";
import addressSplitter from "../../components/addressSplitter";

const Title = ({ address }: { address: string }) => {
	const proto = addressSplitter(address);

	return (
		<div className="d-flex flex-column">
			<h1>{proto?.neighborhood ? proto?.neighborhood : proto?.street}</h1>
			<ul className="d-flex flex-row justify-content-evenly m-0 p-0 w-100 flex-wrap">
				<li>{proto?.city}</li>
				<li>{proto?.street}</li>
				<li>{proto?.neighborhood}</li>
			</ul>
		</div>
	);
};
export default Title;
