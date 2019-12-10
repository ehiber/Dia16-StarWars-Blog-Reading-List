export const getState = ({ getStore, getActions, setStore }) => {
	const SWAPIurl = "https:/swapi.co/api/";

	return {
		store: {
			people: [],
			planets: [],
			vehicles: []
		},
		actions: {
			fetchPeople: async () => {
				let people = [];
				try {
					let response = await fetch(SWAPIurl + "people/", {
						method: "GET",
						headers: {
							"Content-Type": "application/JSON"
						}
					});
					if (response.ok) {
						let responseJSON = await response.json();
						people = responseJSON.results;
						console.log("estos son los people  ", people);
					} else if (response.status == 404) {
						console.log("entro en 404 haz algo");
					}
				} catch (error) {
					console.log("erroooooorrr");
					console.log(error);
				}
				setStore({
					people: people
				});
			},

			fetchPlanets: async () => {
				let planets = [];
				try {
					let response = await fetch(SWAPIurl + "planets/", {
						method: "GET",
						headers: {
							"Content-Type": "application/JSON"
						}
					});
					if (response.ok) {
						let responseJSON = await response.json();
						planets = responseJSON.results;
						console.log("estos son los planets  ", planets);
					} else if (response.status == 404) {
						console.log("entro en 404 haz algo");
					}
				} catch (error) {
					console.log("erroooooorrr");
					console.log(error);
				}
				setStore({
					planets: planets
				});
			},
			fetchVehicles: async () => {
				let vehicles = [];
				try {
					let response = await fetch(SWAPIurl + "vehicles/", {
						method: "GET",
						headers: {
							"Content-Type": "application/JSON"
						}
					});
					if (response.ok) {
						let responseJSON = await response.json();
						vehicles = responseJSON.results;
						console.log("estos son los vehicles  ", vehicles);
					} else if (response.status == 404) {
						console.log("entro en 404 haz algo");
					}
				} catch (error) {
					console.log("erroooooorrr");
					console.log(error);
				}
				setStore({
					vehicles: vehicles
				});
			}
		}
	};
};
