import React from "react";
import {connect} from "react-redux";
import ModalWindowEdit from "./ModalWindowEdit";
import {deleteEntry, saveEditedEntry, toggleEditWindow} from "../../../../../Redux/contentReducer";
import {isInputValueValid} from "../../../../../API/validation";

let MWEContainer = ({tableEntries, editingEntryId ,editWindowShown, ...props}) => {
	return (
		<ModalWindowEdit
			isInputValueValid={isInputValueValid}
			tableEntries={tableEntries}
			editingEntryId={editingEntryId}
			editWindowShown={editWindowShown}
			toggleEditWindow={props.toggleEditWindow}
			saveEditedEntry={props.saveEditedEntry}
			deleteEntry={props.deleteEntry}
		/>
	)
}

let mapStateToProps = (state) => {
	return ({
		tableEntries: state.content.tableEntries,
		editingEntryId: state.content.editingEntryId,
		editWindowShown: state.content.editWindowShown,
	});
};

let ModalWindowEditContainer = connect(mapStateToProps, {
	toggleEditWindow,
	saveEditedEntry,
	deleteEntry,
})(MWEContainer);



export default ModalWindowEditContainer;