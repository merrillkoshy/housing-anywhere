import React from "react";

const Navigation = () => {
	return (
		<div className="d-flex flex-row justify-content-between align-items-center">
			<div className="col px-2">
				<a className="nav-link" href="#result-panel">
					Result
				</a>
			</div>
			<div className="col px-2">
				<a className="nav-link" href="#pg-code">
					Postgres
				</a>
			</div>
		</div>
	);
};
export default Navigation;
