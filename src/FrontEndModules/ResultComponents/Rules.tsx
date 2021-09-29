import React from "react";
import { Rules } from "../../components/dataInterfaces";

const RulesComponent = ({ rules }: { rules: Rules }) => {
	return (
		<details>
			<summary>
				<strong>Rules</strong>
			</summary>
			<ul>
				<li>Pets:{rules?.pets === "yes" ? "✅" : "❌"}</li>
				<li>
					Cleaning Common Rooms Included:
					{rules?.cleaningCommonRoomsIncluded ? "✅" : "❌"}
				</li>
				<li>
					Cleaning Private Rooms Included:
					{rules?.cleaningPrivateRoomIncluded ? "✅" : "❌"}
				</li>
				<li>Play Music:{rules?.playMusic === "yes" ? "✅" : "❌"}</li>
				<li>Smoking:{rules?.smoking === "yes" ? "✅" : "❌"}</li>
				<li>Couple:{rules?.couple ? "✅" : "❌"}</li>
			</ul>
		</details>
	);
};
export default RulesComponent;
