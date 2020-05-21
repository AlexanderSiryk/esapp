import {connect} from "react-redux";
import DecryptingLayer from "./DecryptingLayer";
import {getFirstSignIn, getIsDecrypted} from "../../../Redux/Selectors/layersSelectors";
import {setTableEntries, toggleKeyModal} from "../../../Redux/layersReducer";

let mapStateToProps = (state) => ({
    isDecrypted: getIsDecrypted(state),
    firstSignIn: getFirstSignIn(state),
});

let DecryptingLayerContainer = connect(mapStateToProps, {
    toggleKeyModal,
    setTableEntries,
})(DecryptingLayer);

export default DecryptingLayerContainer;

