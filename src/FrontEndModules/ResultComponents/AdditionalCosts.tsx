const AdditionalCosts = ({ costs }: { costs: any }) => {
	return (
		<details>
			<summary>
				<strong>Additional Costs</strong>
			</summary>
			<ul>
				<li>Water:{costs?.water ? "✅" : "❌"}</li>
				<li>Gas:{costs?.gas ? "✅" : "❌"}</li>
				<li>Electicity:{costs?.electricity ? "✅" : "❌"}</li>
				<li>Internet:{costs?.internet ? "✅" : "❌"}</li>
			</ul>
		</details>
	);
};
export default AdditionalCosts;
