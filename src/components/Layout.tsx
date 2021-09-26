import React from "react";
import { JsxElement } from "typescript";
import Logo from "./Logo";
import Navigation from "./Navigation";

export interface LayoutProps {
	children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<header>
				<Logo />
				<nav>
					<Navigation />
				</nav>
			</header>
			<main>{children}</main>
		</>
	);
};
export default Layout;
