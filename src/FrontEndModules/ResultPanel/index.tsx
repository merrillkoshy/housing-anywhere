import React, { useState } from "react";
import { Alert, Button, Card } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import DetailsModal from "../ResultComponents/DetailsModal";
import ImageSpace from "../ResultComponents/ImageSpace";
import Title from "../ResultComponents/Title";
import apicalls from "../../components/apiCalls";
import { HAData } from "../../components/dataInterfaces";
import Downloader from "./Downloader";
import ReactPaginate from "react-paginate";

const Result = ({
	listing,
	getter,
	pageNumber,
	navigatePage,
	setSending,
}: {
	listing: HAData[];
	getter: () => void;
	pageNumber: number;
	navigatePage: (e: any) => void;
	setSending: React.Dispatch<React.SetStateAction<any>>;
}) => {
	const [show, setShow] = useState<boolean>(false);
	const [showDeletePrompt, setShowDeletePrompt] = useState(false);

	const handleShow = () => {
		setShow(true);
	};
	const handleClose = () => {
		setShow(false);
	};

	return (
		<section id="result-panel" className="mx-2">
			<div className="d-flex flex-column justify-content-center w-100 result-panel">
				{listing ? (
					<>
						<div className="slidable-cards">
							{
								<Card key={uuidv4()} className="w-100 my-2">
									<Card.Header className="p-3">
										<Title address={listing[pageNumber]?.address} />
									</Card.Header>
									<Card.Body>
										<>
											{" "}
											<ImageSpace images={listing[pageNumber]?.images} />{" "}
										</>
									</Card.Body>
									<Card.Footer>
										<>
											<Alert show={showDeletePrompt} variant="danger">
												<Alert.Heading>Woah..wait a minute!</Alert.Heading>
												<p>
													Excuse me boss, you are gonna delete this card. Are
													you sure?
												</p>
												<hr />
												<div className="d-flex justify-content-end">
													<Button
														onClick={() => {
															apicalls.deleteListing(
																listing[pageNumber]?.id,
																getter
															);
															setShowDeletePrompt(false);
														}}
														variant="danger"
													>
														Confirm Delete
													</Button>
													<Button
														onClick={() => {
															setShowDeletePrompt(false);
														}}
														variant="success"
													>
														Oops! Misclick
													</Button>
												</div>
											</Alert>

											<div className="d-flex justify-content-between">
												<div className="d-flex">
													<DetailsModal
														show={show}
														details={listing[pageNumber]}
														handleClose={handleClose}
														setSending={setSending}
													/>
													<Downloader data={listing} />
													<Button onClick={handleShow}>Details</Button>
												</div>
												<div className="d-flex">
													<Button
														variant="danger"
														onClick={() => {
															setShowDeletePrompt(true);
														}}
													>
														Delete
													</Button>
												</div>
											</div>
										</>
									</Card.Footer>
								</Card>
							}
						</div>

						<ReactPaginate
							previousLabel={"previous"}
							nextLabel={"next"}
							breakLabel={"..."}
							breakClassName={"break-me"}
							pageCount={listing.length}
							marginPagesDisplayed={2}
							pageRangeDisplayed={5}
							onPageChange={navigatePage}
							containerClassName={
								"pagination justify-content-center align-items-center"
							}
							activeClassName={"active"}
						/>
					</>
				) : (
					<p>There are no listings available</p>
				)}
			</div>
		</section>
	);
};
export default Result;
