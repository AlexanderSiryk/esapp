import {connect} from "react-redux";
import MapLocationLayer from "./MapLocatoinLayer";
import {getUserToken, getFirstSignIn} from "../../../Redux/Selectors/layersSelectors"
import {setTableEntries, toggleKeyModal} from "../../../Redux/layersReducer"

let mapStateToProps = (state) => ({
    userToken: getUserToken(state),
    isFirstSignIn: getFirstSignIn(state),
});

let DecryptWindowContainer = connect(mapStateToProps, {
    setTableEntries,
    toggleKeyModal,
})(MapLocationLayer);

export default DecryptWindowContainer;
