import {connect} from "react-redux";
import Preferences from "./Preferences";
import {setIsSignedIn} from "../../../Redux/layersReducer";

let mapStateToProps = () => {
	return ({

	});
};

let PreferencesContainer = connect(mapStateToProps, {
	setIsSignedIn,
})(Preferences);

export default PreferencesContainer;