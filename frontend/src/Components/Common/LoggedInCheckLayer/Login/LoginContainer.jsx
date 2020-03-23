import Login from "./Login";
import {connect} from "react-redux";
import {setIsSignedIn, setUserData} from "../../../../Redux/layersReducer";
import {getIsSignedIn} from "../../../../Redux/Selectors/layersSelectors";

let mapStateToProps = (state) => ({
	isSignedIn: getIsSignedIn(state),
});

let LoginContainer = connect(mapStateToProps, {
	setIsSignedIn,
	setUserData,
})(Login);

export default LoginContainer;