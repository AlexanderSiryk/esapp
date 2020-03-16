import {connect} from "react-redux";
import LoggedInCheckLayer from "./LoggedInCheckLayer";
import {getIsSignedIn} from "../../../Redux/Selectors/layersSelectors";

let mapStateToProps = (state) => ({
	isSignedIn: getIsSignedIn(state),
});

let LoggedInCheckLayerContainer = connect(mapStateToProps, {})(LoggedInCheckLayer);

export default LoggedInCheckLayerContainer;