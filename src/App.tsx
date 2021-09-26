import React from "react";
import Admin from "./AdminModules/AdminPanel";
import "./assets/scss/styles.scss";
import Layout from "./components/Layout";
import Result from "./FrontEndModules/ResultPanel";

function App() {
	return (
		<div className="App">
			<Layout>
				<div className="container">
					<div className="d-flex">
						<Admin />
						<Result />
					</div>
				</div>
			</Layout>
		</div>
	);
}

export default App;
