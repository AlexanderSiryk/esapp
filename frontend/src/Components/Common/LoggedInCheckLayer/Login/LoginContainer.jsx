import Login from "./Login";
import {connect} from "react-redux";
import {logIn, setIsSignedIn, setUserData} from "../../../../Redux/layersReducer";
import {getIsSignedIn} from "../../../../Redux/Selectors/layersSelectors";

let mapStateToProps = (state) => ({
	isSignedIn: getIsSignedIn(state),
});

let LoginContainer = connect(mapStateToProps, {
	setIsSignedIn,
	logIn,
	setUserData,
})(Login);

export default LoginContainer;