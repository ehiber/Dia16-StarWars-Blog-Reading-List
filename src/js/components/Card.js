import React from "react";
import { AppContext } from "../store/appContext.js";
import { PropTypes } from "prop-types";

export default class Card extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			algunstate: ""
		};
	}
	static contextType = AppContext;
	render() {
		return (
			<div className="bulding-cards card bg-dark text-white">
				<img
					src="https://via.placeholder.com/80x60"
					className="card-img"
					alt="..."
				/>
				<div className="card-img-overlay">
					<h5 className="card-title">{`${this.props.recursos}`}</h5>
					<p className="card-text">
						This is a wider card with supporting text below as a
						natural lead-in to additional content. This content is a
						little bit longer.
					</p>
					<p className="card-text">Last updated 3 mins ago</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		);
	}
}

Card.propTypes = {
	recursos: PropTypes.object
};
