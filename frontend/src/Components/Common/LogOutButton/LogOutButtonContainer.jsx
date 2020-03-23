import React from "react";
import {connect} from "react-redux";
import LogOutButton from "./LogOutButton";
import {resetLayers, setIsSignedIn} from "../../../Redux/layersReducer";
import {resetContent} from "../../../Redux/contentReducer";
import {resetSidebar} from "../../../Redux/sidebarReducer";
import {getUserLogin} from "../../../Redux/Selectors/layersSelectors";
import {gButtonOperations} from "../../../API/googleAPI";

let LOBContainer = (props) => {

	return <LogOutButton
		userLogin={props.userLogin}
		setIsSignedIn={props.setIsSignedIn}
		resetLayers={props.resetLayers}
		resetContent={props.resetContent}
		resetSidebar={props.resetSidebar}
		logOut={gButtonOperations.logOut}
	/>
}

let mapStateToProps = (state) => ({
	userLogin: getUserLogin(state),
});

let LogOutButtonContainer = connect(mapStateToProps, {
	setIsSignedIn,
	resetLayers,
	resetContent,
	resetSidebar,
})(LOBContainer);

export default LogOutButtonContainer;