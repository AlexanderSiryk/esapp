import {connect} from "react-redux";
import GettingTheKeyModal from "./GettingTheKeyModal";
import {getIsKeyWindowShown} from "../../../Redux/Selectors/contentSelectors";
import {toggleKeyModal} from "../../../Redux/contentReducer";
import {generateImageKey, generateKey, generateSalt} from "../../../API/encryptingOperations";
import {getUserToken} from "../../../Redux/Selectors/layersSelectors";
import {setKey} from "../../../Redux/layersReducer";

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
