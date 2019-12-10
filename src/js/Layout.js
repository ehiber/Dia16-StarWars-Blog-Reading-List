import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { Home } from "./views/home";
import AppContextProvider from "./store/appContext";

const Layout = props => {
	return (
		<BrowserRouter>
			<AppContextProvider>
				<Switch>
					<Route exact path="/" component={Home} />
				</Switch>
			</AppContextProvider>
		</BrowserRouter>
	);
};

export default Layout;
