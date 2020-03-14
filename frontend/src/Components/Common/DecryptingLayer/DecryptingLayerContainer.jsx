import {connect} from "react-redux";
import DecryptingLayer from "./DecryptingLayer";

let mapStateToProps = (state) => {
	return {
		isDecrypted: state.layers.isDecrypted,
	}
}

let DecryptingLayerContainer = connect(mapStateToProps, {})(DecryptingLayer);

export default DecryptingLayerContainer;

