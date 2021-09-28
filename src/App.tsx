import React from "react";
import Admin from "./AdminModules/AdminPanel";

import Layout from "./components/Layout";
import Result from "./FrontEndModules/ResultPanel";
import SettingUpCode from "./PostgresFE/SettingUpCode";

function App() {
	return (
		<div className="App">
			<Layout>
				<div className="container">
					<div
						className="showdown d-flex 
                flex-lg-row flex-xl-row flex-xxl-row
                flex-column justify-content-center
				 justify-content-between align-items-center"
					>
						<Admin />
						<Result />
						<SettingUpCode />
					</div>
				</div>
			</Layout>
		</div>
	);
}

export default App;
