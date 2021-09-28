import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

export interface LayoutProps {
	children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<header className="d-flex ">
				<Logo />
				<nav className="d-flex align-items-center justify-content-end">
					<Navigation />
				</nav>
			</header>
			<main>{children}</main>
		</>
	);
};
export default Layout;
