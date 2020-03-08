import {connect} from "react-redux";
import LoggedInCheckLayer from "./LoggedInCheckLayer";

let mapStateToProps = () => {
	return ({
		loggedIn: true,
	});
};

let LoggedInCheckLayerContainer = connect(mapStateToProps, {

})(LoggedInCheckLayer);

export default LoggedInCheckLayerContainer;