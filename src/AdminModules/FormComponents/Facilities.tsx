import React, { useState } from "react";
import { Form, Col, Row, Dropdown } from "react-bootstrap";
import Switch from "react-switch";
import AdditionalCosts from "./AdditionalCosts";

const Facilities = () => {
	const [allergyFriendly, setAllergyFriendly] = useState(false);
	const [housematesGender, setHousematesGender] = useState("");
	const [registrationPossible, setRegistrationPossible] = useState(false);
	const [tenantStatus, setTenantStatus] = useState("Any");
	const [freePlaces, setFreePlaces] = useState(0);
	const [bedrooms, setBedrooms] = useState(0);
	const [bedroomFurnished, setBedroomFurnished] = useState(false);
	const [bedroomSize, setBedroomSize] = useState(0);
	const [bedroomLock, setBedroomLock] = useState(false);
	const [balconyTerrace, setBalconyTerrace] = useState("");
	const [basement, setBasement] = useState("");
	const [bathroom, setBathroom] = useState("");
	const [garden, setGarden] = useState("");
	const [kitchen, setKitchen] = useState("");
	const [livingRoom, setLivingRoom] = useState("");
	const [parking, setParking] = useState("");
	const [toilet, setToilet] = useState("");
	const [totalSize, setTotalSize] = useState(0);
	const [wheelchairAccessible, setWheelchairAccessible] = useState(false);
	const [airConditioning, setAirConditioning] = useState(false);
	const [bed, setBed] = useState(false);
	const [closet, setCloset] = useState(false);
	const [desk, setDesk] = useState(false);
	const [dishwasher, setDishwasher] = useState(false);
	const [dryer, setDryer] = useState(false);
	const [internet, setInternet] = useState(false);
	const [roomFurniture, setRoomFurniture] = useState(false);
	const [tv, setTv] = useState(false);
	const [washingMachine, setWashingMachine] = useState(false);
	const [wifi, setWifi] = useState(false);
	const [flooring, setFlooring] = useState("");
	const [heating, setHeating] = useState("");
	const [kitchenware, setKitchenware] = useState("");

	return (
		<>
			<Form.Group as={Row} className="mb-3">
				<Form.Label as="legend" column>
					Allergy Friendly?
				</Form.Label>
				<Col>
					<Switch
						id="allergyFriendly"
						onChange={() => {
							setAllergyFriendly(!allergyFriendly);
						}}
						checked={allergyFriendly}
					/>
				</Col>
			</Form.Group>
			<Form.Group className="mb-3">
				<Dropdown>
					<Dropdown.Toggle variant="primary" id="housematesGender">
						{housematesGender}
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setHousematesGender("boys");
							}}
						>
							Boys
						</Dropdown.Item>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setHousematesGender("girls");
							}}
						>
							Girls
						</Dropdown.Item>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setHousematesGender("mixed");
							}}
						>
							Mixed
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</Form.Group>
			<Form.Group as={Row} className="mb-3">
				<Form.Label as="legend" column>
					Registration Possible?
				</Form.Label>
				<Col>
					<Switch
						id="registrationPossible"
						onChange={() => {
							setRegistrationPossible(!registrationPossible);
						}}
						checked={registrationPossible}
					/>
				</Col>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Tenant Status</Form.Label>
				<Dropdown>
					<Dropdown.Toggle variant="primary" id="tenantStatus">
						{tenantStatus}
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setTenantStatus("working");
							}}
						>
							Working Professional
						</Dropdown.Item>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setTenantStatus("student");
							}}
						>
							Student
						</Dropdown.Item>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setTenantStatus("workingStudent");
							}}
						>
							Working Student
						</Dropdown.Item>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setTenantStatus("lookingForJob");
							}}
						>
							Looking For A Job
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Free Places</Form.Label>
				<Form.Control
					type="number"
					placeholder="Number of places available for the listing. This Number is just informative and does not have any impact on the booking."
					value={freePlaces}
					id="freePlaces"
					onChange={(e) => {
						e.preventDefault();
						setFreePlaces((e.currentTarget as HTMLInputElement).valueAsNumber);
					}}
				/>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Bedrooms</Form.Label>
				<Form.Control
					type="number"
					placeholder="Number of bedrooms in the listing."
					value={bedrooms}
					id="bedrooms"
					onChange={(e) => {
						e.preventDefault();
						setBedrooms((e.currentTarget as HTMLInputElement).valueAsNumber);
					}}
				/>
			</Form.Group>
			<Form.Group as={Row} className="mb-3">
				<Form.Label as="legend" column>
					Bedroom Furnished?
				</Form.Label>
				<Col>
					<Switch
						id="bedroomFurnished"
						onChange={() => {
							setBedroomFurnished(!bedroomFurnished);
						}}
						checked={bedroomFurnished}
					/>
				</Col>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Bedroom Size</Form.Label>
				<Form.Control
					type="number"
					placeholder="Enter Bedroom Size"
					value={bedroomSize}
					id="bedroomSize"
					onChange={(e) => {
						e.preventDefault();
						setBedroomSize((e.currentTarget as HTMLInputElement).valueAsNumber);
					}}
				/>
			</Form.Group>
			<Form.Group as={Row} className="mb-3">
				<Form.Label as="legend" column>
					Bedroom Lockable?
				</Form.Label>
				<Col>
					<Switch
						id="bedroomLock"
						onChange={() => {
							setBedroomLock(!bedroomLock);
						}}
						checked={bedroomLock}
					/>
				</Col>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Balcony in Terrace</Form.Label>
				<Dropdown>
					<Dropdown.Toggle variant="primary" id="balconyTerrace">
						{balconyTerrace}
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setBalconyTerrace("no");
							}}
						>
							No
						</Dropdown.Item>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setBalconyTerrace("shared");
							}}
						>
							Shared
						</Dropdown.Item>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setBalconyTerrace("private");
							}}
						>
							Private
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Basement</Form.Label>
				<Dropdown>
					<Dropdown.Toggle variant="primary" id="basement">
						{basement}
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setBasement("no");
							}}
						>
							No
						</Dropdown.Item>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setBasement("shared");
							}}
						>
							Shared
						</Dropdown.Item>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setBasement("private");
							}}
						>
							Private
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Bathroom</Form.Label>
				<Dropdown>
					<Dropdown.Toggle variant="primary" id="bathroom">
						{bathroom}
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setBathroom("no");
							}}
						>
							No
						</Dropdown.Item>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setBathroom("private");
							}}
						>
							Private
						</Dropdown.Item>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setBathroom("withBoys");
							}}
						>
							With Boys
						</Dropdown.Item>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setBathroom("withGirls");
							}}
						>
							With Girls
						</Dropdown.Item>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setBathroom("withBoth");
							}}
						>
							With Both
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Garden</Form.Label>
				<Dropdown>
					<Dropdown.Toggle variant="primary" id="garden">
						{garden}
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setGarden("no");
							}}
						>
							No
						</Dropdown.Item>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setGarden("shared");
							}}
						>
							Shared
						</Dropdown.Item>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setGarden("private");
							}}
						>
							Private
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Kitchen</Form.Label>
				<Dropdown>
					<Dropdown.Toggle variant="primary" id="kitchen">
						{kitchen}
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setKitchen("no");
							}}
						>
							No
						</Dropdown.Item>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setKitchen("shared");
							}}
						>
							Shared
						</Dropdown.Item>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setKitchen("private");
							}}
						>
							Private
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Parking</Form.Label>
				<Dropdown>
					<Dropdown.Toggle variant="primary" id="parking">
						{parking}
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setParking("no");
							}}
						>
							No
						</Dropdown.Item>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setParking("shared");
							}}
						>
							Shared
						</Dropdown.Item>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setParking("private");
							}}
						>
							Private
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Toilet</Form.Label>
				<Dropdown>
					<Dropdown.Toggle variant="primary" id="toilet">
						{toilet}
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setToilet("no");
							}}
						>
							No
						</Dropdown.Item>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setToilet("shared");
							}}
						>
							Shared
						</Dropdown.Item>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setToilet("private");
							}}
						>
							Private
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Total Size</Form.Label>
				<Form.Control
					type="number"
					placeholder="This is the total area of the listing (apartment or house) in square meters, including all private and shared spaces."
					value={totalSize}
					id="totalSize"
					required
					onChange={(e) => {
						e.preventDefault();
						setTotalSize((e.currentTarget as HTMLInputElement).valueAsNumber);
					}}
				/>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Living Room</Form.Label>
				<Form.Control
					type="text"
					id="livingRoom"
					value={livingRoom}
					onChange={(e) => {
						e.preventDefault();
						setLivingRoom(e.currentTarget.value);
					}}
					placeholder="Is there a living room?"
				/>
			</Form.Group>
			<Form.Group as={Row} className="mb-3">
				<Form.Label as="legend" column>
					Wheelchair Accessibility
				</Form.Label>
				<Col>
					<Switch
						id="wheelchairAccessible"
						onChange={() => {
							setWheelchairAccessible(!wheelchairAccessible);
						}}
						checked={wheelchairAccessible}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3">
				<Form.Label as="legend" column>
					Air Conditioning
				</Form.Label>
				<Col>
					<Switch
						id="airConditioning"
						onChange={() => {
							setAirConditioning(!airConditioning);
						}}
						checked={airConditioning}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3">
				<Form.Label as="legend" column>
					Bed
				</Form.Label>
				<Col>
					<Switch
						id="bed"
						onChange={() => {
							setBed(!bed);
						}}
						checked={bed}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3">
				<Form.Label as="legend" column>
					Closet
				</Form.Label>
				<Col>
					<Switch
						id="closet"
						onChange={() => {
							setCloset(!closet);
						}}
						checked={closet}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3">
				<Form.Label as="legend" column>
					Desk
				</Form.Label>
				<Col>
					<Switch
						id="desk"
						onChange={() => {
							setDesk(!desk);
						}}
						checked={desk}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3">
				<Form.Label as="legend" column>
					Dishwasher
				</Form.Label>
				<Col>
					<Switch
						id="dishwasher"
						onChange={() => {
							setDishwasher(!dishwasher);
						}}
						checked={dishwasher}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3">
				<Form.Label as="legend" column>
					Dryer
				</Form.Label>
				<Col>
					<Switch
						id="dryer"
						onChange={() => {
							setDryer(!dryer);
						}}
						checked={dryer}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3">
				<Form.Label as="legend" column>
					Internet
				</Form.Label>
				<Col>
					<Switch
						id="internet"
						onChange={() => {
							setInternet(!internet);
						}}
						checked={internet}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3">
				<Form.Label as="legend" column>
					Room Furniture
				</Form.Label>
				<Col>
					<Switch
						id="roomFurniture"
						onChange={() => {
							setRoomFurniture(!roomFurniture);
						}}
						checked={roomFurniture}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3">
				<Form.Label as="legend" column>
					TV
				</Form.Label>
				<Col>
					<Switch
						id="tv"
						onChange={() => {
							setTv(!tv);
						}}
						checked={tv}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3">
				<Form.Label as="legend" column>
					Washing Machine
				</Form.Label>
				<Col>
					<Switch
						id="washingMachine"
						onChange={() => {
							setWashingMachine(!washingMachine);
						}}
						checked={washingMachine}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3">
				<Form.Label as="legend" column>
					WiFi
				</Form.Label>
				<Col>
					<Switch
						id="wifi"
						onChange={() => {
							setWifi(!wifi);
						}}
						checked={wifi}
					/>
				</Col>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Flooring</Form.Label>
				<Dropdown>
					<Dropdown.Toggle variant="primary" id="flooring">
						{flooring}
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setFlooring("laminate");
							}}
						>
							Laminated
						</Dropdown.Item>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setFlooring("carpet");
							}}
						>
							Carpet Flooring
						</Dropdown.Item>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setFlooring("store");
							}}
						>
							Store
						</Dropdown.Item>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setFlooring("wood");
							}}
						>
							Wooden Flooring
						</Dropdown.Item>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setFlooring("plastic");
							}}
						>
							Plastic Flooring
						</Dropdown.Item>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setFlooring("other");
							}}
						>
							Other
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Heating</Form.Label>
				<Dropdown>
					<Dropdown.Toggle variant="primary" id="heating">
						{heating}
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setHeating("na");
							}}
						>
							NA
						</Dropdown.Item>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setHeating("central");
							}}
						>
							Central
						</Dropdown.Item>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setHeating("gas");
							}}
						>
							Gas
						</Dropdown.Item>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setHeating("woodStove");
							}}
						>
							Wood Stove
						</Dropdown.Item>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setHeating("electrical");
							}}
						>
							Electrical
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
				<Form.Control
					type="text"
					id="heating"
					value={heating}
					onChange={(e) => {
						e.preventDefault();
						setHeating(e.currentTarget.value);
					}}
					placeholder="Is there heating?"
				/>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Kitchenware</Form.Label>
				<Dropdown>
					<Dropdown.Toggle variant="primary" id="kitchenware">
						{kitchenware}
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setKitchenware("no");
							}}
						>
							No
						</Dropdown.Item>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setKitchenware("shared");
							}}
						>
							Shared
						</Dropdown.Item>
						<Dropdown.Item
							onClick={(e) => {
								e.preventDefault();
								setKitchenware("private");
							}}
						>
							Private
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</Form.Group>
			<AdditionalCosts />
		</>
	);
};
export default Facilities;
