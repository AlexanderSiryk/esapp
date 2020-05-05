import {connect} from "react-redux";
import GettingTheKeyModal from "./GettingTheKeyModal";
import {getIsKeyWindowShown} from "../../../Redux/Selectors/contentSelectors";
import {toggleKeyModal} from "../../../Redux/contentReducer";
import {generateKey} from "../../../API/encryptingOperations";
import {getSalt} from "../../../Redux/Selectors/applicationSelectors";

let mapStateToProps = (state) => ({
	isShown: getIsKeyWindowShown(state),
	salt: getSalt(state),
	generateKey,
});

let GettingTheKeyModalContainer = connect(mapStateToProps, {
	toggleKeyModal
})(GettingTheKeyModal)

export default GettingTheKeyModalContainer;