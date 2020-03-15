import {connect} from "react-redux";
import LoggedInCheckLayer from "./LoggedInCheckLayer";

let mapStateToProps = (state) => {
	return ({
		isSignedIn: state.layers.isSignedIn,
	});
};

let LoggedInCheckLayerContainer = connect(mapStateToProps, {

})(LoggedInCheckLayer);

export default LoggedInCheckLayerContainer;