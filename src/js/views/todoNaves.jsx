import React from "react";
import "../../styles/home.css";
import CardNaves from "../component/cardStarShips.jsx";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const TodoNaves = () => {
	const { store, actions } = useContext(Context);
	

	return (
		<div>
			<h1 className="titulos text-white mt-2 ml-4">Naves</h1>
			<div className="mt-4 scrolling-wrapper-flexbox">
				{store.starships.map((item, index) => {
					return (
						<div key={index}>
							<CardNaves name={item.name} uid={item.uid} index={index} />
						</div>
					);
				})}
			</div>
		</div>
	);
};