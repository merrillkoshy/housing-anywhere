const AdditionalCosts = ({ costs }: { costs: any }) => {
	return (
		<details>
			<summary>
				<strong id="additionalCosts">Additional Costs</strong>
			</summary>
			<ul>
				<li id="water">Water:{costs?.water ? "✅" : "❌"}</li>
				<li id="gas">Gas:{costs?.gas ? "✅" : "❌"}</li>
				<li id="electricity">Electicity:{costs?.electricity ? "✅" : "❌"}</li>
				<li id="internet">Internet:{costs?.internet ? "✅" : "❌"}</li>
			</ul>
		</details>
	);
};
export default AdditionalCosts;
