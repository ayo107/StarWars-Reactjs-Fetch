import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const CardPersonajes = props => {
	const { store, actions } = useContext(Context);
	
	

	return (
		<div className="cardscroll mx-2 mb-3">
			<div className="card border-0" style={{ width: "18rem" }}>
				<img
					src={`https://starwars-visualguide.com/assets/img/characters/${props.uid}.jpg`}
					className="card-img-top"
					width="400"
					height="auto"
					alt="..."
				/>
				<div className="card-body bg-negro text-white">
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text">
					A person within the Star Wars universe
					</p>
					
					<Link to={"/personajes/" + props.index}>
						<span className="btn btn-light">Leer mas</span>
						
					</Link>
					<button
						type="button"
						onClick={() => actions.agregarFavorito(props.name)}
						disabled={store.favoritos.includes(props.name)}
						className="ml-2 btn btn-dark">
						<i className="fas fa-heart" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default CardPersonajes;

CardPersonajes.propTypes = {
	name: PropTypes.string,
	uid: PropTypes.string,
	index: PropTypes.number
};