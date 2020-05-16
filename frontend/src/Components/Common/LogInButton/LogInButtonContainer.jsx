import {connect} from "react-redux";
import LogInButton from "./LogInButton";
import {setIsFirstSignIn, setIsSignedIn, setUserData} from "../../../Redux/layersReducer";
import {getIsSignedIn} from "../../../Redux/Selectors/layersSelectors";
import {getClientId} from "../../../Redux/Selectors/applicationSelectors";

let mapStateToProps = (state) => ({
    isSignedIn: getIsSignedIn(state),
    clientId: getClientId(state),
});

let LogInButtonContainer = connect(mapStateToProps, {
    setIsSignedIn,
    setUserData,
    setIsFirstSignIn,
})(LogInButton);

export default LogInButtonContainer;
