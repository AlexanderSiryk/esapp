import Login from "./Login";
import {connect} from "react-redux";
import {logIn, setIsSignedIn, setUserData} from "../../../../Redux/layersReducer";

let mapStateToProps = (state) => {
	return ({
		isSignedIn: state.layers.isSignedIn,
	});
};

let LoginContainer = connect(mapStateToProps, {
	setIsSignedIn,
	logIn,
	setUserData,
})(Login);

export default LoginContainer;