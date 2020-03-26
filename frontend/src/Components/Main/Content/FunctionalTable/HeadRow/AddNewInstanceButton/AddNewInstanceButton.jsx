import React from "react";
import s from "./AddNewInstanceButton.module.css"

let AddNewInstanceButton = ({toggleAddWindow}) => {
	let onAddButtonClick = () => {
		toggleAddWindow();
	}
	return <button
		className={s.addButton}
		onClick={onAddButtonClick}
	>add entry
	</button>
}

export default AddNewInstanceButton;