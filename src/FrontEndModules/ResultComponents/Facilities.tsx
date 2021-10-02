import React from "react";
import AdditionalCostsModule from "./AdditionalCosts";

import { AdditionalCosts, Facilities } from "../../components/dataInterfaces";

const FacilitiesComponent = ({ facilites }: { facilites: Facilities }) => {
	const facility = facilites;
	const additionalCosts: AdditionalCosts = facilites.additionalCosts;
	return (
		<details>
			<summary>
				<strong>Facilities</strong>
			</summary>
			<ul>
				<li id="airConditioning">
					Air conditioning:{facility?.airConditioning ? "✅" : "❌"}
				</li>
				<li id="allergyFriendly">
					Allergy Friendly:{facility?.allergyFriendly ? "✅" : "❌"}
				</li>
				<li id="balconyTerrace">
					Balcony Terrace:{facility?.balconyTerrace === "yes" ? "✅" : "❌"}
				</li>
				<li id="basement">
					Basement:{facility?.basement === "yes" ? "✅" : "❌"}
				</li>
				<li id="bathroom">
					Bathroom:{facility?.bathroom === "yes" ? "✅" : "❌"}
				</li>
				<li id="bed">Bed:{facility?.bed ? "✅" : "❌"}</li>
				<li id="bedroomFurnished">
					Bedroom Furnished:{facility?.bedroomFurnished ? "✅" : "❌"}
				</li>
				<li id="bedroomLock">
					Bedroom Lockable:{facility?.bedroomLock ? "✅" : "❌"}
				</li>
				<li id="bedroomSize">Bedroom Size: {facility?.bedroomSize}</li>
				<li id="bedrooms">Bedrooms: {facility?.bedrooms}</li>
				<li id="closet">Closet: {facility?.closet ? "✅" : "❌"}</li>
				<li id="desk">Desk: {facility?.desk ? "✅" : "❌"}</li>
				<li id="dishwasher">
					Dishwasher: {facility?.dishwasher ? "✅" : "❌"}
				</li>
				<li id="dryer">Dryer:{facility?.dryer ? "✅" : "❌"}</li>
				<li id="flooring">Flooring: {facility?.flooring}</li>
				<li id="freePlaces">Free Places: {facility?.freePlaces}</li>
				<li id="garden">Garden:{facility?.garden === "yes" ? "✅" : "❌"}</li>
				<li id="heating">Bedrooms: {facility?.heating}</li>
				<li id="housematesGender">
					Housemates Gender:
					{facility?.housematesGender === "male"
						? "👨"
						: facility?.housematesGender === "female"
						? "👩"
						: "⚥"}
				</li>
				<li id="internet">Internet:{facility?.internet ? "✅" : "❌"}</li>
				<li id="kitchen">
					Kitchen:{facility?.kitchen === "yes" ? "✅" : "❌"}
				</li>
				<li id="kitchenware">
					Kitchenware:{facility?.kitchenware === "yes" ? "✅" : "❌"}
				</li>
				<li id="livingRoom">
					Living Room:{facility?.livingRoom === "yes" ? "✅" : "❌"}
				</li>
				<li id="parking">
					Parking:{facility?.parking === "yes" ? "✅" : "❌"}
				</li>
				<li id="registrationPossible">
					Registration Possible:{" "}
					{facility?.registrationPossible === "yes" ? "✅" : "❌"}
				</li>
				<li id="roomFurniture">
					Room Furniture: {facility?.roomFurniture === "yes" ? "✅" : "❌"}
				</li>
				<li id="tenantStatus">Tent Status: {facility?.tenantStatus}</li>
				<li id="toilet">Toilet: {facility?.toilet === "yes" ? "✅" : "❌"}</li>
				<li id="totalSize">Total Size: {facility?.totalSize}</li>
				<li id="toilet">Toilet: {facility?.toilet}</li>
				<li id="tv">Tv:{facility?.tv ? "✅" : "❌"}</li>
				<li id="washingMachine">
					Washing Machine: {facility?.washingMachine ? "✅" : "❌"}
				</li>
				<li id="wheelchairAccessible">
					WheelChair Accessible: {facility?.wheelchairAccessible ? "✅" : "❌"}
				</li>
				<li id="wifi">Wifi: {facility?.wifi ? "✅" : "❌"}</li>
				<AdditionalCostsModule costs={additionalCosts} />
			</ul>
		</details>
	);
};
export default FacilitiesComponent;
