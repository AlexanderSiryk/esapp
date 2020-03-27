import {connect} from "react-redux";
import ModalWindowAdd from "./ModalWindowAdd";
import {addEntry, toggleAddWindow} from "../../../../../../Redux/contentReducer";
import {isInputValueValid} from "../../../../../../API/validation";
import {getAddWindowShown} from "../../../../../../Redux/Selectors/contentSelectors";

let mapStateToProps = (state) => ({
	addWindowShown: getAddWindowShown(state),
	isInputValueValid,
});

let ModalWindowAddContainer = connect(mapStateToProps, {
	addEntry,
	toggleAddWindow,
})(ModalWindowAdd);

export default ModalWindowAddContainer;