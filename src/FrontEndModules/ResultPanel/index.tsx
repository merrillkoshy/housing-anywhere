import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import DetailsModal from "../ResultComponents/DetailsModal";
import ImageSpace from "../ResultComponents/ImageSpace";

import Title from "../ResultComponents/Title";
import sanitizeListings from "../../components/sanitizeListings";

import { HAData } from "../../components/dataInterfaces";
import Downloader from "./Downloader";

const Result = () => {
	const [listing, setListing] = useState<HAData[]>([]);

	const [show, setShow] = useState<boolean>(false);
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
		axios
			.get(`https://ha-server.herokuapp.com/listing`, {
				headers: {
					"Access-Control-Allow-Headers": "Content-Type, jwtSecret",
					jwtSecret: process.env.REACT_APP_JWT,
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
					"Content-Type": "application/json",
				},
			})
			.then((response) => {
				const sanitized = sanitizeListings(response.data);
				console.log(sanitized);
				setListing(sanitized);
			});
	};
	return (
		<section id="result-panel" className="mx-2">
			<div className="d-flex justify-content-center w-100 result-panel">
				{listing ? (
					listing?.map((listed: HAData) => {
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
									<DetailsModal
										show={show}
										details={listed}
										handleClose={handleClose}
									/>
									<Downloader data={listing} />
									<Button onClick={handleShow}>Details</Button>
								</Card.Footer>
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
