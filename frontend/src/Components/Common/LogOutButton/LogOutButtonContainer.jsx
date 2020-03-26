import {connect} from "react-redux";
import LogOutButton from "./LogOutButton";
import {resetLayers, setIsSignedIn} from "../../../Redux/layersReducer";
import {resetContent} from "../../../Redux/contentReducer";
import {resetSidebar} from "../../../Redux/sidebarReducer";
import {getUserLogin} from "../../../Redux/Selectors/layersSelectors";
import {getClientId} from "../../../Redux/Selectors/applicationSelectors";

let mapStateToProps = (state) => ({
	userLogin: getUserLogin(state),
	clientId: getClientId(state),
});

let LogOutButtonContainer = connect(mapStateToProps, {
	setIsSignedIn,
	resetLayers,
	resetContent,
	resetSidebar,
})(LogOutButton);

export default LogOutButtonContainer;