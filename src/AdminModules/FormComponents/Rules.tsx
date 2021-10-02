import React from "react";
import { Form, Col, Row } from "react-bootstrap";
import Switch from "react-switch";

const Rules = ({
	pets,
	setPets,
	cleaningCommonRoomsIncluded,
	setCleaningCommonRoomsIncluded,
	cleaningPrivateRoomIncluded,
	setCleaningPrivateRoomIncluded,
	playMusic,
	setPlayMusic,
	smoking,
	setSmoking,
	couple,
	setCouple,
}: {
	pets: string;
	setPets: React.Dispatch<React.SetStateAction<string>>;
	cleaningCommonRoomsIncluded: boolean;
	setCleaningCommonRoomsIncluded: React.Dispatch<React.SetStateAction<boolean>>;
	cleaningPrivateRoomIncluded: boolean;
	setCleaningPrivateRoomIncluded: React.Dispatch<React.SetStateAction<boolean>>;
	playMusic: string;
	setPlayMusic: React.Dispatch<React.SetStateAction<string>>;
	smoking: string;
	setSmoking: React.Dispatch<React.SetStateAction<string>>;
	couple: boolean;
	setCouple: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	return (
		<>
			<Form.Group className="mb-3">
				<Form.Label>Pets</Form.Label>
				<Form.Control
					type="text"
					id="pets"
					value={pets}
					onChange={(e) => {
						e.preventDefault();
						setPets(e.currentTarget.value);
					}}
					placeholder="Allowed?"
				/>
			</Form.Group>

			<Form.Group as={Row} className="mb-3">
				<Form.Label as="legend" column>
					Cleaning Common Rooms Included ?
				</Form.Label>
				<Col>
					<Switch
						id="cleaningCommonRoomsIncluded"
						onChange={() => {
							setCleaningCommonRoomsIncluded(!cleaningCommonRoomsIncluded);
						}}
						checked={cleaningCommonRoomsIncluded}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3">
				<Form.Label as="legend" column>
					Cleaning Private Rooms Included ?
				</Form.Label>
				<Col>
					<Switch
						id="cleaningPrivateRoomIncluded"
						onChange={() => {
							setCleaningPrivateRoomIncluded(!cleaningPrivateRoomIncluded);
						}}
						checked={cleaningPrivateRoomIncluded}
					/>
				</Col>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Smoking Allowed?</Form.Label>
				<Form.Control
					type="text"
					id="smoking"
					value={smoking}
					onChange={(e) => {
						e.preventDefault();
						setSmoking(e.currentTarget.value);
					}}
					placeholder="Allowed?"
				/>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Can Play Musical instruments?</Form.Label>
				<Form.Control
					type="text"
					id="playMusic"
					value={playMusic}
					onChange={(e) => {
						e.preventDefault();
						setPlayMusic(e.currentTarget.value);
					}}
					placeholder="Allowed?"
				/>
			</Form.Group>
			<Form.Group as={Row} className="mb-3">
				<Form.Label as="legend" column>
					Couples Allowed?
				</Form.Label>
				<Col>
					<Switch
						id="couple"
						onChange={() => {
							setCouple(!couple);
						}}
						checked={couple}
					/>
				</Col>
			</Form.Group>
		</>
	);
};
export default Rules;
