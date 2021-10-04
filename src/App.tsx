import React, { useState, useCallback, useEffect } from "react";
import Admin from "./AdminModules/AdminPanel";
import { ToastContainer } from "react-toastify";
import Layout from "./components/Layout";
import Result from "./FrontEndModules/ResultPanel";
import SettingUpCode from "./PostgresFE/SettingUpCode";
import { HAData } from "./components/dataInterfaces";
import axios from "axios";
import sanitizeListings from "./components/sanitizeListings";

function App() {
	// the sending state carries the data from one of the sending commands
	// for eg: insert data and displays it on the code pane on the right
	// This is just for presentation

	const [sending, setSending] = useState({});
	const [listing, setListing] = useState<HAData[]>([]);
	const [pageNumber, setPageNumber] = useState(0);

	const pageSetter = (pg: number) => {
		setPageNumber(pg);
	};
	const navigatePage = (e: any) => {
		pageSetter(e.selected);
	};
	const getter = useCallback(() => {
		axios
			.get(`https://ha-server.herokuapp.com/listing`, {
				headers: {
					"Access-Control-Allow-Headers": "Content-Type, jwtSecret",
					jwtSecret: "merrillkoshy",
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
					"Content-Type": "application/json",
				},
			})
			.then((response) => {
				// should shape the incoming data to JSON for processing within our app
				const sanitized = sanitizeListings(response.data);
				setListing(sanitized);
			})
			.then(() => {
				pageSetter(0);
			});
	}, []);
	useEffect(() => {
		getter();
	}, [getter, listing.length]);

	return (
		<div className="App">
			{/* The HOC houses the header, nav and footer */}
			<Layout>
				<div className="container my-5">
					<div
						className="showdown d-flex 
                flex-lg-row flex-xl-row flex-xxl-row
                flex-column justify-content-center
				 justify-content-between align-items-top"
					>
						{/* Okay, we are splitting our home screen into 3
						Admin side (where you input), Result side (fetch from API)
						Postgres side (for presentation only) */}
						<Admin getter={getter} setSending={setSending} />
						<Result
							listing={listing}
							setSending={setSending}
							getter={getter}
							pageNumber={pageNumber}
							navigatePage={navigatePage}
						/>
						<SettingUpCode sending={sending} />
					</div>
				</div>
				<ToastContainer />
			</Layout>
		</div>
	);
}

export default App;
