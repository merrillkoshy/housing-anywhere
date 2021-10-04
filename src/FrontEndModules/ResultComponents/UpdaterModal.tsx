import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Pricing from "../../AdminModules/FormComponents/Pricing";
import apiCalls from "../../components/apiCalls";
import { HAData } from "../../components/dataInterfaces";

const UpdaterModal = ({
	show,
	handleUpdaterClose,
	details,
	setSending,
}: {
	show: boolean;
	handleUpdaterClose: () => void;
	details: HAData;
	setSending: React.Dispatch<React.SetStateAction<any>>;
}) => {
	const [price, setPrice] = useState<number>(details?.price);
	const [currencyCode, setCurrencyCode] = useState<string>(
		details?.currencycode
	);

	return (
		<Modal id="updater-modal" centered show={show} size={"lg"}>
			<Modal.Header closeButton>
				<Modal.Title className="w-75">
					<h1>Entry Editor (Pricing)</h1>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Pricing
					price={price}
					setPrice={setPrice}
					currencyCode={currencyCode}
					setCurrencyCode={setCurrencyCode}
				/>
			</Modal.Body>
			<Modal.Footer>
				<Button
					variant="success"
					onClick={() => {
						setSending({
							price: price,
							currencycode: currencyCode,
						});
						apiCalls.updateListing(details?.id, {
							price: price,
							currencycode: currencyCode,
						});
					}}
				>
					Update
				</Button>
				<Button variant="danger" onClick={handleUpdaterClose}>
					Cancel
				</Button>
			</Modal.Footer>
		</Modal>
	);
};
export default UpdaterModal;
