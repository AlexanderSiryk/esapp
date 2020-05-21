import {connect} from "react-redux";
import GettingTheKeyModal from "./GettingTheKeyModal";
import {generateImageKey, generateKey, generateSalt} from "../../../API/encryptingOperations";
import {getIsKeyWindowShown, getUserToken} from "../../../Redux/Selectors/layersSelectors";
import {setKey, toggleKeyModal} from "../../../Redux/layersReducer";

let mapStateToProps = (state) => ({
    isShown: getIsKeyWindowShown(state),
    userToken: getUserToken(state),
    generateSalt,
    generateKey,
    generateImageKey,
});

let GettingTheKeyModalContainer = connect(mapStateToProps, {
    toggleKeyModal,
    setKey,
})(GettingTheKeyModal)

export default GettingTheKeyModalContainer;
