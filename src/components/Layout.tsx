import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

export interface LayoutProps {
	children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<header
				className="d-flex flex-lg-row flex-xl-row flex-xxl-row
                flex-column justify-content-center
				 justify-content-between align-items-center"
			>
				<Logo />
				<nav
					className="d-flex align-items-center 
				justify-content-lg-end justify-content-xl-end justify-content-xxl-end
				justify-content-center w-lg-25 w-xl-25 w-xxl-25
				w-100"
				>
					<Navigation />
				</nav>
			</header>
			<main>{children}</main>
			<footer className="pt-2">
				<aside>Created for HA by Merrill Koshy Thomas</aside>
				<div className="d-flex justify-content-center align-items-center mt-2">
					<div className="d-flex justify-content-center align-items-center">
						<p>
							<img
								className="mx-2"
								src={"https://cdn-icons-png.flaticon.com/512/174/174857.png"}
								height={26}
								width={26}
								alt={"linkedin-logo"}
							/>
							<a
								rel="noreferrer"
								href={"https://www.linkedin.com/in/merrill-koshy-thomas"}
								target="_blank"
							>
								/merrill-koshy-thomas
							</a>
						</p>
						<p>
							<img
								className="mx-2"
								src={
									"https://merrillkoshy.github.io/favicon/apple-icon-114x114.png"
								}
								height={26}
								width={26}
								alt={"linkedin-logo"}
							/>
							<a
								rel="noreferrer"
								href={"https://merrillkoshy.github.io"}
								target="_blank"
							>
								Portfolio
							</a>
						</p>
					</div>
					<div
						className="justify-content-center d-lg-flex d-xl-flex d-xxl-flex
                d-none mx-5"
					>
						<svg height="32" aria-hidden="true" viewBox="0 0 16 16">
							<path
								fillRule="evenodd"
								d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
							></path>
						</svg>{" "}
						<a
							rel="noreferrer"
							href={"https://github.com/merrillkoshy/housing-anywhere"}
							target="_blank"
							className="mx-2"
						>
							<strong className="tech">Front End : </strong>
							/merrillkoshy/housing-anywhere
						</a>
					</div>
					<div
						className="justify-content-center d-lg-flex d-xl-flex d-xxl-flex
                d-none mx-5"
					>
						<svg
							height="32"
							aria-hidden="true"
							viewBox="0 0 16 16"
							version="1.1"
						>
							<path
								fillRule="evenodd"
								d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
							></path>
						</svg>{" "}
						<a
							rel="noreferrer"
							href={"https://github.com/merrillkoshy/ha-server"}
							target="_blank"
							className="mx-2"
						>
							<strong className="tech">Back End : </strong>
							/merrillkoshy/ha-server
						</a>
					</div>
				</div>
			</footer>
		</>
	);
};
export default Layout;
