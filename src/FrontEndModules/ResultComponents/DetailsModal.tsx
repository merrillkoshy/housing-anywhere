import { Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import ImageSpace from "./ImageSpace";
import FacilitiesComponent from "./Facilities";
import Title from "./Title";
import TLDR from "./TLDR";
import Calendar from "./Calendar";
import MainDetails from "./MainDetails";
import { HAData } from "../../components/dataInterfaces";
import { useState } from "react";
import UpdaterModal from "./UpdaterModal";

const DetailsModal = ({
	show,
	details,
	handleClose,
	setSending,
}: {
	show: boolean;
	details: HAData;
	handleClose: () => void;
	setSending: React.Dispatch<React.SetStateAction<any>>;
}) => {
	const [showUpdater, setShowUpdater] = useState(false);
	const handleUpdaterOpen = () => {
		setShowUpdater(true);
	};
	const handleUpdaterClose = () => {
		setShowUpdater(false);
	};
	return (
		<Modal id="details-modal" show={show} size={"lg"}>
			<Modal.Header>
				<Modal.Title className="w-100">
					<div className="d-flex justify-content-between">
						<Title address={details?.address} />
						<div
							className="d-flex justify-content-center align-items-center flex-lg-row flex-xl-row flex-xxl-row
                flex-column"
							onClick={handleUpdaterOpen}
							style={{
								cursor: "pointer",
							}}
						>
							<div className="d-flex justify-content-center align-items-center">
								<span>Edit entry</span>
							</div>
							<FontAwesomeIcon className="mx-1" icon={faEdit} />
						</div>
					</div>
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
						<div className="d-flex px-3  justify-content-center align-items-center">
							<ImageSpace images={details?.images} />
						</div>
						<div className="d-flex flex-column px-3">
							<TLDR
								description={details?.description}
								currencycode={details?.currencycode}
								price={details?.price}
								costs={details?.costs}
								rules={details?.rules}
							/>
							<Calendar calendar={details?.calendaroperations} />
							<FacilitiesComponent facilites={details?.facilities} />
						</div>
					</div>
					<div className="divider"></div>
					<div className="d-flex px-3 w-100 align-items-stretch">
						<MainDetails
							alias={details?.alias}
							currentoccupancy={details?.currentoccupancy}
							deposit={details?.deposit}
							estimatedbills={details?.estimatedbills}
							externalreference={details?.externalreference}
							extradata={details?.extradata}
							kind={details?.kind?.toString()}
							maxage={details?.maxage}
							maxbookabledays={details?.maxbookabledays}
							minage={details?.minage}
							minimumstaymonths={details?.minimumstaymonths}
							moveinwindow={details?.moveinwindow}
							preferredgender={details?.preferredgender}
							type={details?.type?.toString()}
						/>
					</div>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="danger" onClick={handleClose}>
					Close
				</Button>
			</Modal.Footer>
			<UpdaterModal
				show={showUpdater}
				handleUpdaterClose={handleUpdaterClose}
				details={details}
				setSending={setSending}
			/>
		</Modal>
	);
};
export default DetailsModal;
