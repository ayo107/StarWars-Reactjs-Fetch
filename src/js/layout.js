import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Todoplaneta } from "./views/todoPlaneta.jsx";
import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { Personajes } from "./views/personajes";
import { Planetas } from "./views/planetas";
import {Todopersonaje} from "./views/todoPersonaje.jsx";
import {TodoNaves} from "./views/todoNaves.jsx";
import {Naves} from "./views/naves";
import injectContext from "./store/appContext";
import {Notfound} from "./component/NotFound.jsx";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route exact path="/"
						element={<Home />}>
					
						</Route>
						<Route exact path="/demo"
						element={<Demo />}>
						
						</Route>
						<Route exact path="/personajes/:uid"
						element={<Personajes />}>
						</Route>
							<Route exact path="/todopersonaje"
						element={<Todopersonaje />}>

						</Route>
						

						
						<Route exact path="/planetas/:uid"
						element={<Planetas />}>
						</Route>
							<Route exact path="/todoplaneta"
						element={<Todoplaneta />}>

						</Route>

						
						<Route exact path="/naves/:uid"
						element={<Naves />}>

						</Route>
						<Route exact path="/todonave"
						element={<TodoNaves />}>

						</Route>
						
						<Route exact path="/notfound"
						element={<Notfound />}>
							
						</Route>
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
