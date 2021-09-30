import React, { useState } from "react";
import { Accordion, Form, Card, Button } from "react-bootstrap";
import insertThis from "../../components/apiCalls";
import { Costs } from "../../components/dataInterfaces";
import Address from "../FormComponents/Address";
import CalendarOperations from "../FormComponents/CalendarOperations";
import CostsComponent from "../FormComponents/Costs";
import Description from "../FormComponents/Description";
import Facilities from "../FormComponents/Facilities";
import Images from "../FormComponents/Images";
import Preferences from "../FormComponents/Preferences";
import Pricing from "../FormComponents/Pricing";
import Rules from "../FormComponents/Rules";

const Admin = () => {
	// Pricing usestates
	const [price, setPrice] = useState<number>(0);
	const [currencyCode, setCurrencyCode] = useState<string>("");
	// Address usestates
	const [houseNumber, setHouseNumber] = useState<string>("");
	const [street, setStreet] = useState<string>("");
	const [city, setCity] = useState<string>("");
	const [state, setState] = useState<string>("");
	const [postalCode, setPostalCode] = useState<string>("");
	const [neighborhood, setNeighborhood] = useState<string>("");
	const [countryCode, setCountryCode] = useState("");
	//Description usestates
	const [type, setType] = useState(0);
	const [kind, setKind] = useState(0);
	const [description, setDescription] = useState("");
	const [deposit, setDeposit] = useState(0);
	const [estimatedBills, setEstimatedBills] = useState(0);
	const [minimumStayMonths, setMinimumStayMonths] = useState("");
	const [maxBookableDays, setMaxBookableDays] = useState(0);
	const [moveInWindow, setMoveInWindow] = useState(0);
	const [currentOccupancy, setCurrentOccupancy] = useState(0);
	//Rules usestates
	const [pets, setPets] = useState("");
	const [
		cleaningCommonRoomsIncluded,
		setCleaningCommonRoomsIncluded,
	] = useState(false);
	const [
		cleaningPrivateRoomIncluded,
		setCleaningPrivateRoomIncluded,
	] = useState(false);
	const [playMusic, setPlayMusic] = useState("");
	const [smoking, setSmoking] = useState("");
	const [couple, setCouple] = useState(false);
	//Preferences usestate
	const [minAge, setMinAge] = useState(0);
	const [maxAge, setMaxAge] = useState(0);
	const [preferredGender, setPreferredGender] = useState("No Preference");
	const [alias, setAlias] = useState("");
	const [externalReference, setExternalReference] = useState("");
	const [extraData, setExtraData] = useState("");
	//Facilities usestate
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
	//Calendar setstates
	const [typeCalendar, setTypeCalendar] = useState(0);
	const [dateFrom, setDateFrom] = useState("");
	const [dateTo, setDateTo] = useState("");
	//Images
	const [files, setFiles] = useState([]);
	//Cost usestates
	const [typeCost, setTypeCost] = useState("");
	const [value, setValue] = useState(0);
	const [payableAt, setPayableAt] = useState("");
	const [payableBy, setPayableBy] = useState("");
	const [refundable, setRefundable] = useState(false);
	const [estimated, setEstimated] = useState(false);
	const [mandatory, setMandatory] = useState(false);
	const [costs, setCosts] = useState<Costs[]>([]);
	//Additional Costs usestate
	const [water, setWater] = useState(false);
	const [gas, setGas] = useState(false);
	const [electricity, setElectricity] = useState(false);
	const [internetCost, setInternetCost] = useState(false);
	return (
		<section id="admin-side">
			<Form className="w-100 input-form px-5">
				<Pricing
					price={price}
					setPrice={setPrice}
					currencyCode={currencyCode}
					setCurrencyCode={setCurrencyCode}
				/>
				<Accordion defaultActiveKey="0">
					<Card>
						<Accordion.Toggle as={Card.Header} eventKey="0">
							Address
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="0">
							<Card.Body>
								<Address
									houseNumber={houseNumber}
									setHouseNumber={setHouseNumber}
									street={street}
									setStreet={setStreet}
									city={city}
									setCity={setCity}
									state={state}
									setState={setState}
									postalCode={postalCode}
									setPostalCode={setPostalCode}
									neighborhood={neighborhood}
									setNeighborhood={setNeighborhood}
									countryCode={countryCode}
									setCountryCode={setCountryCode}
								/>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Description
						type={type}
						setType={setType}
						kind={kind}
						setKind={setKind}
						description={description}
						setDescription={setDescription}
						deposit={deposit}
						setDeposit={setDeposit}
						estimatedBills={estimatedBills}
						setEstimatedBills={setEstimatedBills}
						minimumStayMonths={minimumStayMonths}
						setMinimumStayMonths={setMinimumStayMonths}
						maxBookableDays={maxBookableDays}
						setMaxBookableDays={setMaxBookableDays}
						moveInWindow={moveInWindow}
						setMoveInWindow={setMoveInWindow}
						currentOccupancy={currentOccupancy}
						setCurrentOccupancy={setCurrentOccupancy}
					/>
					<Card>
						<Accordion.Toggle as={Card.Header} eventKey="1">
							Rules
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="1">
							<Card.Body>
								<Rules
									pets={pets}
									setPets={setPets}
									cleaningCommonRoomsIncluded={cleaningCommonRoomsIncluded}
									setCleaningCommonRoomsIncluded={
										setCleaningCommonRoomsIncluded
									}
									cleaningPrivateRoomIncluded={cleaningPrivateRoomIncluded}
									setCleaningPrivateRoomIncluded={
										setCleaningPrivateRoomIncluded
									}
									playMusic={playMusic}
									setPlayMusic={setPlayMusic}
									smoking={smoking}
									setSmoking={setSmoking}
									couple={couple}
									setCouple={setCouple}
								/>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Preferences
						minAge={minAge}
						setMinAge={setMinAge}
						maxAge={maxAge}
						setMaxAge={setMaxAge}
						preferredGender={preferredGender}
						setPreferredGender={setPreferredGender}
						alias={alias}
						setAlias={setAlias}
						externalReference={externalReference}
						setExternalReference={setExternalReference}
						extraData={extraData}
						setExtraData={setExtraData}
					/>
					<Card>
						<Accordion.Toggle as={Card.Header} eventKey="2">
							Facilities
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="2">
							<Card.Body>
								<Facilities
									allergyFriendly={allergyFriendly}
									setAllergyFriendly={setAllergyFriendly}
									housematesGender={housematesGender}
									setHousematesGender={setHousematesGender}
									registrationPossible={registrationPossible}
									setRegistrationPossible={setRegistrationPossible}
									tenantStatus={tenantStatus}
									setTenantStatus={setTenantStatus}
									freePlaces={freePlaces}
									setFreePlaces={setFreePlaces}
									bedrooms={bedrooms}
									setBedrooms={setBedrooms}
									bedroomFurnished={bedroomFurnished}
									setBedroomFurnished={setBedroomFurnished}
									bedroomSize={bedroomSize}
									setBedroomSize={setBedroomSize}
									bedroomLock={bedroomLock}
									setBedroomLock={setBedroomLock}
									balconyTerrace={balconyTerrace}
									setBalconyTerrace={setBalconyTerrace}
									basement={basement}
									setBasement={setBasement}
									bathroom={bathroom}
									setBathroom={setBathroom}
									garden={garden}
									setGarden={setGarden}
									kitchen={kitchen}
									setKitchen={setKitchen}
									livingRoom={livingRoom}
									setLivingRoom={setLivingRoom}
									parking={parking}
									setParking={setParking}
									toilet={toilet}
									setToilet={setToilet}
									totalSize={totalSize}
									setTotalSize={setTotalSize}
									wheelchairAccessible={wheelchairAccessible}
									setWheelchairAccessible={setWheelchairAccessible}
									airConditioning={airConditioning}
									setAirConditioning={setAirConditioning}
									bed={bed}
									setBed={setBed}
									closet={closet}
									setCloset={setCloset}
									desk={desk}
									setDesk={setDesk}
									dishwasher={dishwasher}
									setDishwasher={setDishwasher}
									dryer={dryer}
									setDryer={setDryer}
									internet={internet}
									setInternet={setInternet}
									roomFurniture={roomFurniture}
									setRoomFurniture={setRoomFurniture}
									tv={tv}
									setTv={setTv}
									washingMachine={washingMachine}
									setWashingMachine={setWashingMachine}
									wifi={wifi}
									setWifi={setWifi}
									flooring={flooring}
									setFlooring={setFlooring}
									heating={heating}
									setHeating={setHeating}
									kitchenware={kitchenware}
									setKitchenware={setKitchenware}
									//addl.costs
									water={water}
									setWater={setWater}
									gas={gas}
									setGas={setGas}
									electricity={electricity}
									setElectricity={setElectricity}
									internetCost={internetCost}
									setInternetCost={setInternetCost}
								/>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Accordion.Toggle as={Card.Header} eventKey="3">
							Calendar Operations
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="3">
							<Card.Body>
								<CalendarOperations
									type={typeCalendar}
									setType={setTypeCalendar}
									dateFrom={dateFrom}
									setDateFrom={setDateFrom}
									dateTo={dateTo}
									setDateTo={setDateTo}
								/>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Accordion.Toggle as={Card.Header} eventKey="4">
							Images
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="4">
							<Card.Body>
								<Images files={files} setFiles={setFiles} />
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Accordion.Toggle as={Card.Header} eventKey="5">
							Costs
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="5">
							<Card.Body>
								<CostsComponent
									type={typeCost}
									setType={setTypeCost}
									value={value}
									setValue={setValue}
									payableAt={payableAt}
									setPayableAt={setPayableAt}
									payableBy={payableBy}
									setPayableBy={setPayableBy}
									refundable={refundable}
									setRefundable={setRefundable}
									estimated={estimated}
									setEstimated={setEstimated}
									mandatory={mandatory}
									setMandatory={setMandatory}
									costs={costs}
									setCosts={setCosts}
								/>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
				</Accordion>
				<div className="mt-2 d-flex justify-content-center">
					<Button
						className=" my-2 mb-5"
						variant="success"
						onClick={(e) => {
							e.preventDefault();
							insertThis({
								price: price,
								currencyCode: currencyCode,
								address: {
									housenumber: houseNumber,
									street: street,
									city: city,
									state: state,
									postalCode: postalCode,
									neighborhood: neighborhood,
									countryCode: countryCode,
								},
								type: type,
								kind: kind,
								description: description,
								deposit: deposit,
								estimatedBills: estimatedBills,
								minimumStayMonths: minimumStayMonths,
								maxBookableDays: maxBookableDays,
								moveInWindow: moveInWindow,
								currentOccupancy: currentOccupancy,
								rules: {
									pets: pets,
									cleaningCommonRoomsIncluded: cleaningCommonRoomsIncluded,
									cleaningPrivateRoomIncluded: cleaningPrivateRoomIncluded,
									playMusic: playMusic,
									smoking: smoking,
									couple: couple,
								},
								minAge: minAge,
								maxAge: maxAge,
								preferredGender: preferredGender,
								alias: alias,
								externalReference: externalReference,
								extraData: extraData,
								facilities: {
									allergyFriendly: allergyFriendly,
									housematesGender: housematesGender,
									registrationPossible: registrationPossible,
									tenantStatus: tenantStatus,
									freePlaces: freePlaces,
									bedrooms: bedrooms,
									bedroomFurnished: bedroomFurnished,
									bedroomSize: bedroomSize,
									bedroomLock: bedroomLock,
									balconyTerrace: balconyTerrace,
									basement: basement,
									bathroom: bathroom,
									garden: garden,
									kitchen: kitchen,
									livingRoom: livingRoom,
									parking: parking,
									toilet: toilet,
									totalSize: totalSize,
									wheelchairAccessible: wheelchairAccessible,
									airConditioning: airConditioning,
									bed: bed,
									closet: closet,
									desk: desk,
									dishwasher: dishwasher,
									dryer: dryer,
									internet: internet,
									roomFurniture: roomFurniture,
									tv: tv,
									washingMachine: washingMachine,
									wifi: wifi,
									flooring: flooring,
									heating: heating,
									kitchenware: kitchenware,
									additionalCosts: {
										water: water,
										gas: gas,
										electricity: electricity,
										internet: internet,
									},
								},
								calendarOperations: [
									{
										type: typeCalendar,
										dateFrom: dateFrom,
										dateTo: dateTo,
									},
								],
								images: files,
								costs: costs,
							});
						}}
					>
						Submit
					</Button>
				</div>
			</Form>
		</section>
	);
};
export default Admin;
