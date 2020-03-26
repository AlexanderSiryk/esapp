import {connect} from "react-redux";
import ModalWindowEdit from "./ModalWindowEdit";
import {
	clearSearchField, deleteEntry, saveEditedEntry, toggleEditWindow
} from "../../../../../Redux/contentReducer";
import {isInputValueValid} from "../../../../../API/validation";
import {
	getEditingEntryId, getEditWindowShown, getSortedTable, getTableEntries
} from "../../../../../Redux/Selectors/contentSelectors";

let mapStateToProps = (state) => ({
	tableEntries: getTableEntries(state),
	editingEntryId: getEditingEntryId(state),
	editWindowShown: getEditWindowShown(state),
	filteredTableEntries: getSortedTable(state),
	isInputValueValid: isInputValueValid,
});

let ModalWindowEditContainer = connect(mapStateToProps, {
	toggleEditWindow,
	saveEditedEntry,
	deleteEntry,
	clearSearchField,
})(ModalWindowEdit);

export default ModalWindowEditContainer;