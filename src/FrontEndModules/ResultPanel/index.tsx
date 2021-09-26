import React from "react";
import { Card } from "react-bootstrap";

const Result = () => {
	return (
		<div className="d-flex">
			<Card>
				<Card.Header>
					<Card.Title>Result Card</Card.Title>
				</Card.Header>
				<Card.Body>some body</Card.Body>
				<Card.Footer>get some action here</Card.Footer>
			</Card>
		</div>
	);
};
export default Result;
