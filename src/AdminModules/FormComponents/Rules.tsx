import React, { useState } from "react";
import { Form, Col, Row } from "react-bootstrap";
import Switch from "react-switch";

const Rules = () => {
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
