import {connect} from "react-redux";
import GettingTheKeyModal from "./GettingTheKeyModal";
import {getIsKeyWindowShown} from "../../../Redux/Selectors/contentSelectors";
import {toggleKeyModal} from "../../../Redux/contentReducer";
import {generateImageKey, generateKey, generateSalt} from "../../../API/encryptingOperations";
import {getUserToken} from "../../../Redux/Selectors/layersSelectors";

let mapStateToProps = (state) => ({
    isShown: getIsKeyWindowShown(state),
    userToken: getUserToken(state),
    generateKey,
    generateSalt,
    generateImageKey,
});

let GettingTheKeyModalContainer = connect(mapStateToProps, {
    toggleKeyModal,
})(GettingTheKeyModal)

export default GettingTheKeyModalContainer;
