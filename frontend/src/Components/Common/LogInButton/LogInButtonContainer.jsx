import {connect} from "react-redux";
import LogInButton from "./LogInButton";
import {setIsSignedIn, setUserData} from "../../../Redux/layersReducer";
import {getIsSignedIn} from "../../../Redux/Selectors/layersSelectors";
import {GOOGLE_CLIENT_ID} from "../../../API/DAL_API";

let mapStateToProps = (state) => ({
	isSignedIn: getIsSignedIn(state),
	GOOGLE_CLIENT_ID: GOOGLE_CLIENT_ID,
});

let LogInButtonContainer = connect(mapStateToProps, {
	setIsSignedIn,
	setUserData,
})(LogInButton);

export default LogInButtonContainer;