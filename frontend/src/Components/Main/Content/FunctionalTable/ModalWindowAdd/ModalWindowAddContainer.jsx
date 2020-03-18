import {connect} from "react-redux";
import ModalWindowAdd from "./ModalWindowAdd";
import {addEntry, toggleAddWindow} from "../../../../../Redux/contentReducer";
import {isInputValueValid} from "../../../../../API/validation";
import React from "react";
import {getAddWindowShown} from "../../../../../Redux/Selectors/contentSelectors";

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

let mapStateToProps = (state) => ({
	addWindowShown: getAddWindowShown(state),
});

let ModalWindowAddContainer = connect(mapStateToProps, {
	addEntry,
	toggleAddWindow,
})(MWAContainer);

export default ModalWindowAddContainer;