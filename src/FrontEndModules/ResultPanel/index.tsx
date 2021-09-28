import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import DetailsModal from "../ResultComponents/DetailsModal";
import ImageSpace from "../ResultComponents/ImageSpace";

import Title from "../ResultComponents/Title";

const Result = () => {
	const [listing, setListing] = useState([]);
	const [show, setShow] = useState(false);
	const handleShow = () => {
		setShow(true);
	};
	const handleClose = () => {
		setShow(false);
	};
	useEffect(() => {
		getter();
	}, []);

	const getter = () => {
		axios.get("http://localhost:3001/listing").then((response) => {
			console.log(response.data);
			setListing(response.data);
		});
	};
	return (
		<section id="result-panel">
			<div className="d-flex justify-content-center w-100 result-panel">
				{listing ? (
					listing?.map((listed: any) => {
						return (
							<Card key={uuidv4()} className="w-100">
								<Card.Header>
									<Title address={listed?.address} />
								</Card.Header>
								<Card.Body>
									<>
										{" "}
										<ImageSpace images={listed?.images} />{" "}
									</>
								</Card.Body>
								<Card.Footer>
									<Button onClick={handleShow}>Details</Button>
								</Card.Footer>
								<DetailsModal
									show={show}
									details={listed}
									handleClose={handleClose}
								/>
							</Card>
						);
					})
				) : (
					<p>There are no listings available</p>
				)}
			</div>
		</section>
	);
};
export default Result;
