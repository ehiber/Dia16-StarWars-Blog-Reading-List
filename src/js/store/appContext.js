import React, { createContext } from "react";
import { getState } from "./flux.js";
import PropTypes from "prop-types";

export const AppContext = createContext(null);

export default class AppContextProvider extends React.Component {
	constructor(props) {
		super(props);
		this.state = getState({
			getStore: () => this.state.store,
			getActions: () => this.state.actions,
			setStore: updatedStore =>
				this.setState({
					store: Object.assign(this.state.store, updatedStore),
					actions: { ...this.state.actions }
				})
		});
	}

	async componentDidMount() {
		this.state.actions.fetchPeople();
		this.state.actions.fetchPlanets();
		this.state.actions.fetchVehicles();
	}

	render() {
		return (
			<AppContext.Provider value={this.state}>
				{this.props.children}
			</AppContext.Provider>
		);
	}
}

AppContextProvider.propTypes = {
	children: PropTypes.node.isRequired
};
