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
		</>
	);
};
export default Layout;
