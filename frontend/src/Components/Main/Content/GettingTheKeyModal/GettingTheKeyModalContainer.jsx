import {connect} from "react-redux";
import GettingTheKeyModal from "./GettingTheKeyModal";
import {getIsKeyWindowShown} from "../../../../Redux/Selectors/contentSelectors";
import {toggleKeyModal} from "../../../../Redux/contentReducer";

let mapStateToProps = (state) => ({
	isShown: getIsKeyWindowShown(state),
});

let GettingTheKeyModalContainer = connect(mapStateToProps, {
	toggleKeyModal
})(GettingTheKeyModal)

export default GettingTheKeyModalContainer;