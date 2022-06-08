import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img
						src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo.png"
						width="60"
						height="40"
					/>
				</span>
			</Link>
			
			<Link to="/todopersonaje">
				<button className="btn btn-warning font-weight-bold text-dark">Personajes</button>
			</Link>
			<Link to="/todoplaneta">
				<button className="btn btn-warning font-weight-bold text-dark">Planetas</button>
			</Link>
			<Link to="/todonave">
				<button className="btn btn-warning font-weight-bold text-dark">Naves</button>
			</Link>
			<div className="ml-auto d-flex flex-row">
				<Dropdown>
					<Dropdown.Toggle variant="dark" id="dropdown-basic">
						Favoritos ({store.favoritos.length}){" "}
					</Dropdown.Toggle>
					<Dropdown.Menu>
						{store.favoritos.length == 0 ? (
							<Dropdown.Item className="d-flex justify-content-between align-items-center">
								<span>No hay favoritos</span>
							</Dropdown.Item>
						) : (
							store.favoritos.map((favorito, index) => {
								return (
									<Dropdown.Item
										href="#/action-1"
										key={index}
										className="d-flex justify-content-between align-items-center">
										<span>{favorito}</span>{" "}
										<i
											className="fas fa-trash-alt ml-5"
											onClick={() => actions.eliminarFavorito(index)}
										/>
									</Dropdown.Item>
								);
							})
						)}
					</Dropdown.Menu>
				</Dropdown>
			</div>
		</nav>
	);
};
