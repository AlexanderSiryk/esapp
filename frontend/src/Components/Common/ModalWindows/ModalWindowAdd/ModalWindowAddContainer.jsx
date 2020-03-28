import {connect} from "react-redux";
import ModalWindowAdd from "./ModalWindowAdd";
import {addEntry, toggleAddWindow} from "../../../../Redux/contentReducer";
import {isInputValueValid} from "../../../../API/validation";
import {getAddWindowShown} from "../../../../Redux/Selectors/contentSelectors";
import {getKey} from "../../../../Redux/Selectors/layersSelectors";
import {postEntry} from "../../../../Redux/layersReducer";
import {encryptEntry} from "../../../../API/encryptingOperations";

let mapStateToProps = (state) => ({
	addWindowShown: getAddWindowShown(state),
	decryptingKey: getKey(state),
	isInputValueValid,
	encryptEntry,
});

let ModalWindowAddContainer = connect(mapStateToProps, {
	addEntry,
	toggleAddWindow,
	postEntry,
})(ModalWindowAdd);

export default ModalWindowAddContainer;