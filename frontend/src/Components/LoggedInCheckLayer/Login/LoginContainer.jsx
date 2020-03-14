import Login from "./Login";
import {connect} from "react-redux";
import {setIsSignedIn} from "../../../Redux/logInReducer";

let mapStateToProps = (state) => {
	return ({
		isSignedIn: state.logIn.isSignedIn,
	});
};

let LoginContainer = connect(mapStateToProps, {
	setIsSignedIn,
})(Login);

export default LoginContainer;