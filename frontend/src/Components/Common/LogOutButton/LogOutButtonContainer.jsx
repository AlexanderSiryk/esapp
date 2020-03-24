import {connect} from "react-redux";
import LogOutButton from "./LogOutButton";
import {resetLayers, setIsSignedIn} from "../../../Redux/layersReducer";
import {resetContent} from "../../../Redux/contentReducer";
import {resetSidebar} from "../../../Redux/sidebarReducer";
import {getUserLogin} from "../../../Redux/Selectors/layersSelectors";
import {GOOGLE_CLIENT_ID} from "../../../API/DAL_API";

let mapStateToProps = (state) => ({
	userLogin: getUserLogin(state),
	GOOGLE_CLIENT_ID: GOOGLE_CLIENT_ID,
});

let LogOutButtonContainer = connect(mapStateToProps, {
	setIsSignedIn,
	resetLayers,
	resetContent,
	resetSidebar,
})(LogOutButton);

export default LogOutButtonContainer;