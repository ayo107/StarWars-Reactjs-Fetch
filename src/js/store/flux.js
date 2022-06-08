const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			personajes: [],
			planetas: [],
			starships: [],
			favoritos: [],
			detalle: null
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: async () => {
				//personajes
				try {
					const res = await fetch("https://www.swapi.tech/api/people?page=1&limit=100"); //acá hacemos el fetch, que seria la respuesta
					const data = await res.json(); //la data es la respuesta que nos da el fetch convertido a json
					console.log("Async:", data);
					setStore({
						personajes: data.results //results es la información que nos interesa de esa respuesta del fetch
					});
				} catch (error) {
					console.log(error);
				}
				//planetas
				try {
					const res = await fetch("https://www.swapi.tech/api/planets?page=1&limit=100");
					const data = await res.json();
					console.log("Async:", data);
					setStore({
						planetas: data.results
					});
				} catch (error) {
					console.log(error);
				}

				//Naves
				try {
					const res = await fetch("https://www.swapi.tech/api/starships?page=1&limit=100");
					const data = await res.json();
					console.log("Async:", data);
					setStore({
						starships: data.results
					});
				} catch (error) {
					console.log(error);
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			agregarFavorito: nuevo => {
				const store = getStore();
				if (!store.favoritos.includes(nuevo)) {
					let newListaFavoritos = [...store.favoritos, nuevo];
					setStore({ favoritos: newListaFavoritos });
				}
			},
			eliminarFavorito: i => {
				const store = getStore();
				let newListaFavoritos = store.favoritos.filter((element, index) => {
					if (i != index) return element;
				});
				setStore({ favoritos: newListaFavoritos });
			},

			getDetallePersonaje: async uid => {
				try {
					const id = parseInt(uid, 10) +1;
					const res = await fetch("https://www.swapi.tech/api/people/" + id);
					const data = await res.json();
					console.log("AsyncDetalles:", data.result.properties);
					setStore({
						detalle: data.result.properties
					});
				} catch {}
			},
			getDetallePlaneta: async uid => {
				try {
					const id = parseInt(uid, 10) +1;
					const res = await fetch("https://www.swapi.tech/api/planets/" + id);
					const data = await res.json();
					console.log("AsyncDetalles:", data.result.properties);
					setStore({
						detalle: data.result.properties
					});
				} catch {}
			},
			getDetalleVehiculo: async uid => {
				try {
					const id = parseInt(uid, 10) +1;
					const res = await fetch("https://www.swapi.tech/api/starships/" + id);
					const data = await res.json();
					console.log("AsyncDetalles:", data.result.properties);
					setStore({
						detalle: data.result.properties
					});
				} catch {}
			}
		}
	};
};

export default getState;