import React from "react";
import s from "./AddNewInstanceButton.module.css"

let AddNewInstanceButton = (props) => {
	let onAddButtonClick = () => {
		props.toggleAddWindow();
	}
	return <button
		className={s.addButton}
		onClick={onAddButtonClick}
	>add entry
	</button>
}

export default AddNewInstanceButton;