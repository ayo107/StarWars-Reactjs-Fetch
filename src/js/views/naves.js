import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Naves = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	let numerourl = parseInt(params.uid, 10) +1;
    useEffect(() => {
		actions.getDetalleVehiculo(params.uid);
	}, []);
    return (
		<div className="container d-flex flex-row bg-negro rounded p-3">
			<img src={`https://starwars-visualguide.com/assets/img/starships/${numerourl}.jpg`} alt="..." />
			<div className="d-flex flex-column text-white">
				<h1 className="text-center">{store.starships[params.uid].name}</h1>
				
					<ul>
						
						<li>Modelo: {store.detalle != null ? store.detalle.model : ""} </li>
						<li>Manufacturación: {store.detalle != null ? store.detalle.manufacturer : ""} </li>
						<li>Costo: {store.detalle != null ? store.detalle.cost_in_credits : ""} </li>
						<li>Pasajeros: {store.detalle != null ? store.detalle.passengers : ""} </li>
						<li>Capacidad de carga: {store.detalle != null ? store.detalle.cargo_capacity : ""} </li>
					</ul>
					
					
				
			</div>
		</div>
	);
};

Naves.propTypes = {
	match: PropTypes.object,
	uid: PropTypes.string
};
