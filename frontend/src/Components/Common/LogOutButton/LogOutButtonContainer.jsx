import {connect} from "react-redux";
import LogOutButton from "./LogOutButton";
import {logOut, resetLayers, setIsSignedIn} from "../../../Redux/layersReducer";
import {resetContent} from "../../../Redux/contentReducer";
import {resetSidebar} from "../../../Redux/sidebarReducer";
import {getUserLogin} from "../../../Redux/Selectors/layersSelectors";

let mapStateToProps = (state) => ({
	userLogin: getUserLogin(state),
});

let LogOutButtonContainer = connect(mapStateToProps, {
	setIsSignedIn,
	logOut,
	resetLayers,
	resetContent,
	resetSidebar,
})(LogOutButton);

export default LogOutButtonContainer;