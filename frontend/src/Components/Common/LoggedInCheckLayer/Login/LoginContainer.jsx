import Login from "./Login";
import {connect} from "react-redux";
import {logIn, setIsSignedIn} from "../../../../Redux/layersReducer";

let mapStateToProps = (state) => {
	return ({
		isSignedIn: state.layers.isSignedIn,
	});
};

let LoginContainer = connect(mapStateToProps, {
	setIsSignedIn,
	logIn,
})(Login);

export default LoginContainer;