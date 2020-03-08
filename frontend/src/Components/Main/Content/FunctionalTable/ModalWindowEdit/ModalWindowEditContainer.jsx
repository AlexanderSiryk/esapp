import {connect} from "react-redux";
import ModalWindowEdit from "./ModalWindowEdit";
import {deleteEntry, saveEditedEntry, toggleEditWindow} from "../../../../../Redux/contentReducer";

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
})(ModalWindowEdit);



export default ModalWindowEditContainer;