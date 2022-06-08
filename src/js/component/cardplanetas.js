import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const CardPlanetas = props => {
	
	const { store, actions } = useContext(Context);
	/*const images = {
		Tatooine:
			"https://media.cntraveler.com/photos/5727696bb161ad8b31235293/16:9/w_2560%2Cc_limit/GettyImages-143687829-tunisia.jpg",
		Alderaan:
			"https://lumiere-a.akamaihd.net/v1/images/databank_alderaan_01_169_4a5264e2.jpeg?region=0%2C0%2C1560%2C780",
		"Yavin IV": "https://i.redd.it/ig9ectnjbgsz.jpg",
		Hoth:
			"https://static0.srcdn.com/wordpress/wp-content/uploads/2019/08/star-wars-empire-strikes-back-hoth-ion-canon-echo-base-Edited.jpg",
		Dagobah: "https://lumiere-a.akamaihd.net/v1/images/dagobah_1ab566e6.jpeg?region=38%2C0%2C598%2C299",
		Bespin:
			"https://i0.wp.com/thegamefanatics.com/wp-content/uploads/2016/06/star-wars-battlefront-bespin-dlc-update-needs-content-that-should-have-been-there-at-la-943519.jpg?fit=1936%2C1090&ssl=1",
		Endor: "https://miro.medium.com/max/2560/1*iqaur5uhY90F2rLPIv-lvQ.jpeg",
		Naboo:
			"https://media.contentapi.ea.com/content/dam/walrus/images/2018/11/mapvista-theed-grid.jpg.adapt.crop191x100.628p.jpg",
		Coruscant: "https://lumiere-a.akamaihd.net/v1/images/Coruscant_03db43b4.jpeg?region=0%2C96%2C1536%2C768",
		Kamino:
			"https://lumiere-a.akamaihd.net/v1/images/databank_kamino_01_169_f9027822.jpeg?region=0%2C49%2C1560%2C780"
	};*/

	return (
		<div className="cardscroll mx-2 mb-3" key={props.index}>
			<div className="card border-0" style={{ width: "18rem" }}>
				<img src={`https://starwars-visualguide.com/assets/img/planets/${props.uid}.jpg`} style={{ width: 288, height: 144 }} className="card-img-top" alt="..." />
				<div className="card-body bg-negro text-white">
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text">
					A planet
					</p>
					<Link to={"/planetas/" + props.index}>
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

export default CardPlanetas;

CardPlanetas.propTypes = {
	name: PropTypes.string,
	uid: PropTypes.string,
	index: PropTypes.number
};