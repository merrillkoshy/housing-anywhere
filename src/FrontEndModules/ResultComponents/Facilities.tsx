import React from "react";
import AdditionalCosts from "./AdditionalCosts";

import { Facilities } from "../../components/dataInterfaces";

const FacilitiesComponent = ({ facilites }: { facilites: Facilities }) => {
	const facility = facilites;
	const additionalCosts = facilites.additionalCosts;
	return (
		<details>
			<summary>
				<strong>Facilities</strong>
			</summary>
			<ul>
				<li>Air conditioning:{facility?.airConditioning ? "✅" : "❌"}</li>
				<li>Allergy Friendly:{facility?.allergyFriendly ? "✅" : "❌"}</li>
				<li>
					Balcony Terrace:{facility?.balconyTerrace === "yes" ? "✅" : "❌"}
				</li>
				<li>Basement:{facility?.basement === "yes" ? "✅" : "❌"}</li>
				<li>Bathroom:{facility?.bathroom === "yes" ? "✅" : "❌"}</li>
				<li>Bed:{facility?.bed ? "✅" : "❌"}</li>
				<li>Bedroom Furnished:{facility?.bedroomFurnished ? "✅" : "❌"}</li>
				<li>Bedroom Lockable:{facility?.bedroomLock ? "✅" : "❌"}</li>
				<li>Bedroom Size: {facility?.bedroomSize}</li>
				<li>Bedrooms: {facility?.bedrooms}</li>
				<li>Closet: {facility?.closet ? "✅" : "❌"}</li>
				<li>Desk: {facility?.desk ? "✅" : "❌"}</li>
				<li>Dishwasher: {facility?.dishwasher ? "✅" : "❌"}</li>
				<li>Dryer:{facility?.dryer ? "✅" : "❌"}</li>
				<li>Flooring: {facility?.flooring}</li>
				<li>Free Places: {facility?.freePlaces}</li>
				<li>Garden:{facility?.garden === "yes" ? "✅" : "❌"}</li>
				<li>Bedrooms: {facility?.heating}</li>
				<li>
					Housemates Gender:
					{facility?.housematesGender === "male"
						? "👨"
						: facility?.housematesGender === "female"
						? "👩"
						: "⚥"}
				</li>
				<li>Internet:{facility?.internet ? "✅" : "❌"}</li>
				<li>Kitchen:{facility?.kitchen === "yes" ? "✅" : "❌"}</li>
				<li>Kitchenware:{facility?.kitchenware === "yes" ? "✅" : "❌"}</li>
				<li>Living Room:{facility?.livingRoom === "yes" ? "✅" : "❌"}</li>
				<li>Parking:{facility?.parking === "yes" ? "✅" : "❌"}</li>
				<li>
					Registration Possible:{" "}
					{facility?.registrationPossible === "yes" ? "✅" : "❌"}
				</li>
				<li>
					Room Furniture: {facility?.roomFurniture === "yes" ? "✅" : "❌"}
				</li>
				<li>Tent Status: {facility?.tenantStatus}</li>
				<li>Toilet: {facility?.toilet === "yes" ? "✅" : "❌"}</li>
				<li>Total Size: {facility?.totalSize}</li>
				<li>Toilet: {facility?.toilet}</li>
				<li>Tv:{facility?.tv ? "✅" : "❌"}</li>
				<li>Washing Machine: {facility?.washingMachine ? "✅" : "❌"}</li>
				<li>
					WheelChair Accessible: {facility?.wheelchairAccessible ? "✅" : "❌"}
				</li>
				<li>Wifi: {facility?.wifi ? "✅" : "❌"}</li>
				<AdditionalCosts costs={additionalCosts} />
			</ul>
		</details>
	);
};
export default FacilitiesComponent;
