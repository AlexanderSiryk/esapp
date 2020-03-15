import {connect} from "react-redux";
import Preferences from "./Preferences";
import {logOut, setIsSignedIn} from "../../../Redux/layersReducer";

let mapStateToProps = () => {
	return ({

	});
};

let PreferencesContainer = connect(mapStateToProps, {
	setIsSignedIn,
	logOut,
})(Preferences);

export default PreferencesContainer;