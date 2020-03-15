import {connect} from "react-redux";
import ModalWindowAdd from "./ModalWindowAdd";
import {addEntry, toggleAddWindow} from "../../../../../Redux/contentReducer";
import {isInputValueValid} from "../../../../../API/validation";
import React from "react";

let MWAContainer = ({addWindowShown, addEntry, toggleAddWindow}) => {
	return (
		<ModalWindowAdd
			isInputValueValid={isInputValueValid}
			addWindowShown={addWindowShown}
			toggleAddWindow={toggleAddWindow}
			addEntry={addEntry}
		/>
	)
}

let mapStateToProps = (state) => {
	return ({
		addWindowShown: state.content.addWindowShown,
	});
};

let ModalWindowAddContainer = connect(mapStateToProps, {
	addEntry,
	toggleAddWindow,
})(MWAContainer);



export default ModalWindowAddContainer;