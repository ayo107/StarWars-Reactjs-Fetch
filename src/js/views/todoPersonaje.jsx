import React from "react";
import "../../styles/home.css";
import CardPersonajes from "../component/cardpersonajes";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const Todopersonaje = () => {
	const { store, actions } = useContext(Context);
	

	return (
		<div>
			<h1 className="titulos text-white ml-4">Personajes</h1>
			<div className="mt-4 scrolling-wrapper-flexbox">
				{store.personajes.map((item, index) => {
					return (
						<div key={index}>
							<CardPersonajes name={item.name} uid={item.uid} index={index} />
							
						</div>
					);
				})}
			</div>
		</div>
	);
};