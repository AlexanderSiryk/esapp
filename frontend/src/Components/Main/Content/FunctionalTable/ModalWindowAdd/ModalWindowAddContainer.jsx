import {connect} from "react-redux";
import ModalWindowAdd from "./ModalWindowAdd";
import {addEntry, toggleAddWindow} from "../../../../../Redux/contentReducer";

let mapStateToProps = (state) => {
	return ({
		addWindowShown: state.content.addWindowShown,
	});
};

let ModalWindowAddContainer = connect(mapStateToProps, {
	addEntry,
	toggleAddWindow,
})(ModalWindowAdd);



export default ModalWindowAddContainer;