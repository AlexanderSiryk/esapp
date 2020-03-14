import {connect} from "react-redux";
import Preferences from "./Preferences";
import {setIsSignedIn} from "../../../Redux/logInReducer";

let mapStateToProps = (state) => {
	return ({

	});
};

let PreferencesContainer = connect(mapStateToProps, {
	setIsSignedIn,
})(Preferences);

export default PreferencesContainer;