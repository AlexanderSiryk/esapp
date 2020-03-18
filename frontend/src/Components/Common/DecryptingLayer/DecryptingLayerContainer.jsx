import {connect} from "react-redux";
import DecryptingLayer from "./DecryptingLayer";
import {getIsDecrypted} from "../../../Redux/Selectors/layersSelectors";

let mapStateToProps = (state) => ({
	isDecrypted: getIsDecrypted(state),
});

let DecryptingLayerContainer = connect(mapStateToProps, {})(DecryptingLayer);

export default DecryptingLayerContainer;

