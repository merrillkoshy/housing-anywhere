import React from "react";
import rulesSplitter from "../../components/rulesSplitter";

const Rules = ({ rules }: { rules: any }) => {
	const allRules = rulesSplitter(rules);

	return (
		<details>
			<summary>
				<strong>Rules</strong>
			</summary>
			<ul>
				<li>Pets:{allRules.pets === "yes" ? "✅" : "❌"}</li>
				<li>
					Cleaning Common Rooms Included:
					{allRules.cleaningCommonRoomsIncluded ? "✅" : "❌"}
				</li>
				<li>
					Cleaning Private Rooms Included:
					{allRules.cleaningPrivateRoomIncluded ? "✅" : "❌"}
				</li>
				<li>Play Music:{allRules.playMusic === "yes" ? "✅" : "❌"}</li>
				<li>Smoking:{allRules.smoking === "yes" ? "✅" : "❌"}</li>
				<li>Couple:{allRules.couple ? "✅" : "❌"}</li>
			</ul>
		</details>
	);
};
export default Rules;
