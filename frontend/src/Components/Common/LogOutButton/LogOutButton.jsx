import React from "react";
import {GoogleLogout} from "react-google-login";

let LogOutButton = (props) => {
	let logOut = () => {
		props.setIsSignedIn(false);
		props.resetContent();
		props.resetSidebar();
		props.resetLayers();

	}
	return <GoogleLogout
		{...props.ownProps}
		buttonText={props.buttonText}
		onLogoutSuccess={logOut}
	/>
}

export default LogOutButton;