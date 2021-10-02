import React from "react";
import { Rules } from "../../components/dataInterfaces";

const RulesComponent = ({ rules }: { rules: Rules }) => {
	return (
		<details>
			<summary>
				<strong>Rules</strong>
			</summary>
			<ul>
				<li id="pets">Pets:{rules?.pets === "yes" ? "✅" : "❌"}</li>
				<li id="cleaningCommonRoomsIncluded">
					Cleaning Common Rooms Included:
					{rules?.cleaningCommonRoomsIncluded ? "✅" : "❌"}
				</li>
				<li id="cleaningPrivateRoomIncluded">
					Cleaning Private Rooms Included:
					{rules?.cleaningPrivateRoomIncluded ? "✅" : "❌"}
				</li>
				<li id="playMusic">
					Play Music:{rules?.playMusic === "yes" ? "✅" : "❌"}
				</li>
				<li id="smoking">Smoking:{rules?.smoking === "yes" ? "✅" : "❌"}</li>
				<li id="couple">Couple:{rules?.couple ? "✅" : "❌"}</li>
			</ul>
		</details>
	);
};
export default RulesComponent;
