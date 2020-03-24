import React from "react";
import {GoogleLogout} from "react-google-login";

let LogOutButton = (props) => {
	let logOut = () => {
		props.setIsSignedIn(false);
		props.resetContent();
		props.resetSidebar();
		props.resetLayers();

	}
	return (
		<GoogleLogout
			clientId={props.GOOGLE_CLIENT_ID}
			buttonText="Logout"
			onLogoutSuccess={logOut}
		/>
	);
}

export default LogOutButton;