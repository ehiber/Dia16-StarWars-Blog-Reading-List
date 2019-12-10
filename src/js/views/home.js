import React from "react";
import { AppContext } from "../store/appContext";
import Card from "../components/Card";
import { PropTypes } from "prop-types";

//include images into your bundle
import starWarsLogo from "../../img/Star-Wars-Logo.jpg";

//create your first component
export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			algunostate: ""
		};
	}

	static contextType = AppContext;

	render() {
		let recursos = this.context.store.people[0];
		console.log("estos son los recursos   ", recursos);
		return (
			<React.Fragment>
				<nav className="navbar navbar-light bg-light">
					<div className="nav-social">
						<ul />
					</div>
					<a className="navbar-brand">
						<img className="logo" src={starWarsLogo} />
					</a>
					<form className="form-inline">
						<input
							className="form-control mr-sm-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button
							className="btn btn-outline-success my-2 my-sm-0"
							type="submit">
							Search
						</button>
					</form>
				</nav>
				<nav className="navbar navbar-light bg-light">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<a className="nav-link" href="#">
								Character{" "}
								<span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Vehicle
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Planet
							</a>
						</li>
					</ul>
				</nav>
				<Card recurso={recursos} /> {/*  */}
			</React.Fragment>
		);
	}
}
