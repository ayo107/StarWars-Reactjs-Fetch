import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planetas = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	let numerourl = parseInt(params.uid, 10) +1;
	
	useEffect(() => {
		actions.getDetallePlaneta(params.uid);
	}, []);
	return (
		<div className="container d-flex flex-row bg-negro rounded p-3">
			<img src={`https://starwars-visualguide.com/assets/img/planets/${numerourl}.jpg`} alt="..." />
			<div className="d-flex flex-column text-white">
				<h1 className="text-center">{store.planetas[params.uid].name}</h1>
				
					<ul>
						<li>Nombre: {store.detalle != null ? store.detalle.name : ""}</li>
						<li>Diametro: {store.detalle != null ? store.detalle.diameter : ""}</li>
						<li>Rotación: {store.detalle != null ? store.detalle.rotation_period : ""}</li>
						<li>Periodo Orbital: {store.detalle != null ? store.detalle.orbital_period : ""}</li>
						<li>Gravedad: {store.detalle != null ? store.detalle.gravity : ""}</li>
						
					</ul>
					
					
				
			</div>
		</div>
	);
};

Planetas.propTypes = {
	match: PropTypes.object,
	uid: PropTypes.string
};