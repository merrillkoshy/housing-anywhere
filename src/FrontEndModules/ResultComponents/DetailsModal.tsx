import { Button, Col, Modal } from "react-bootstrap";

import ImageSpace from "./ImageSpace";
import FacilitiesComponent from "./Facilities";
import Title from "./Title";
import TLDR from "./TLDR";
import Calendar from "./Calendar";
import MainDetails from "./MainDetails";

const DetailsModal = ({
	show,
	details,
	handleClose,
}: {
	show: boolean;
	details: any;
	handleClose: () => void;
}) => {
	return (
		<Modal show={show} size={"lg"}>
			<Modal.Header>
				<Modal.Title className="w-75">
					<Title address={details.address} />
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div
					className="container d-flex 
                    flex-column justify-content-center"
				>
					<div
						className="d-flex 
                flex-lg-row flex-xl-row flex-xxl-row
                flex-column justify-content-center"
					>
						<div className="d-flex px-3">
							<ImageSpace images={details.images} />
						</div>
						<div className="d-flex flex-column px-3">
							<TLDR
								description={details.description}
								currencycode={details.currencycode}
								price={details.price}
								costs={details.costs}
								rules={details.rules}
							/>
							<Calendar calendar={details.calendaroperations} />
							<FacilitiesComponent facilites={details.facilities} />
						</div>
					</div>
					<div className="divider"></div>
					<div className="d-flex px-3 w-100 align-items-stretch">
						<MainDetails
							alias={details.alias}
							currentoccupancy={details.currentoccupancy}
							deposit={details.deposit}
							estimatedbills={details.estimatedbills}
							externalreference={details.externalreference}
							extradata={details.extradata}
							kind={details.kind}
							maxage={details.maxage}
							maxbookabledays={details.maxbookabledays}
							minage={details.minage}
							minimumstaymonths={details.minimumstaymonths}
							moveinwindow={details.moveinwindow}
							preferredgender={details.preferredgender}
							type={details.type}
						/>
					</div>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="danger" onClick={handleClose}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};
export default DetailsModal;
