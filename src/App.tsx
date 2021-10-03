import React, { useState } from "react";
import Admin from "./AdminModules/AdminPanel";
import { ToastContainer } from "react-toastify";
import Layout from "./components/Layout";
import Result from "./FrontEndModules/ResultPanel";
import SettingUpCode from "./PostgresFE/SettingUpCode";

function App() {
	const [sending, setSending] = useState({});
	return (
		<div className="App">
			<Layout>
				<div className="container my-5">
					<div
						className="showdown d-flex 
                flex-lg-row flex-xl-row flex-xxl-row
                flex-column justify-content-center
				 justify-content-between align-items-top"
					>
						<Admin setSending={setSending} />
						<Result setSending={setSending} />
						<SettingUpCode sending={sending} />
					</div>
				</div>
				<ToastContainer />
			</Layout>
		</div>
	);
}

export default App;
