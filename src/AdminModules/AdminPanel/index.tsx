import React from "react";
import { Accordion, Form, Card } from "react-bootstrap";
import Address from "../FormComponents/Address";
import CalendarOperations from "../FormComponents/CalendarOperations";
import Costs from "../FormComponents/Costs";
import Description from "../FormComponents/Description";
import Facilities from "../FormComponents/Facilities";
import Images from "../FormComponents/Images";
import Preferences from "../FormComponents/Preferences";
import Pricing from "../FormComponents/Pricing";
import Rules from "../FormComponents/Rules";

const Admin = () => {
	return (
		<section id="admin-side">
			<Form className="w-100 input-form px-5">
				<Pricing />
				<Accordion defaultActiveKey="0">
					<Card>
						<Accordion.Toggle as={Card.Header} eventKey="0">
							Address
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="0">
							<Card.Body>
								<Address />
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Description />
					<Card>
						<Accordion.Toggle as={Card.Header} eventKey="1">
							Rules
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="1">
							<Card.Body>
								<Rules />
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Preferences />
					<Card>
						<Accordion.Toggle as={Card.Header} eventKey="2">
							Facilities
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="2">
							<Card.Body>
								<Facilities />
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Accordion.Toggle as={Card.Header} eventKey="3">
							Calendar Operations
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="3">
							<Card.Body>
								<CalendarOperations />
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Accordion.Toggle as={Card.Header} eventKey="4">
							Images
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="4">
							<Card.Body>
								<Images />
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Accordion.Toggle as={Card.Header} eventKey="5">
							Costs
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="5">
							<Card.Body>
								<Costs />
							</Card.Body>
						</Accordion.Collapse>
					</Card>
				</Accordion>
			</Form>
		</section>
	);
};
export default Admin;
