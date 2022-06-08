import React from "react";
import "../../styles/home.css";
import CardPlanetas from "../component/cardplanetas";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const Todoplaneta = () => {
	const { store, actions } = useContext(Context);
	

	return (
		<div>
			<h1 className="titulos text-white mt-2 ml-4">Planetas</h1>
			<div className="mt-4 scrolling-wrapper-flexbox">
				{store.planetas.map((item, index) => {
					return (
						<div key={index}>
							<CardPlanetas name={item.name} uid={item.uid} index={index} />
						</div>
					);
				})}
			</div>
		</div>
	);
};