import React from "react";
import {connect} from "react-redux";
import ModalWindowEdit from "./ModalWindowEdit";
import {
	clearSearchField,
	deleteEntry,
	saveEditedEntry,
	toggleEditWindow
} from "../../../../../Redux/contentReducer";
import {isInputValueValid} from "../../../../../API/validation";
import {getSortedTable} from "../../../../../Redux/Selectors/contentSelectors";

let MWEContainer = ({tableEntries, editingEntryId ,editWindowShown, filteredTableEntries, ...props}) => {
	return (
		<ModalWindowEdit
			isInputValueValid={isInputValueValid}
			tableEntries={tableEntries}
			editingEntryId={editingEntryId}
			editWindowShown={editWindowShown}
			filteredTableEntries={filteredTableEntries}
			clearSearchField={props.clearSearchField}
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
		filteredTableEntries: getSortedTable(state),
	});
};

let ModalWindowEditContainer = connect(mapStateToProps, {
	toggleEditWindow,
	saveEditedEntry,
	deleteEntry,
	clearSearchField,
})(MWEContainer);



export default ModalWindowEditContainer;