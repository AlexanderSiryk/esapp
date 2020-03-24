import React from "react";
import GoogleLogin from "react-google-login";

let LogInButton = (props) => {
	let onSuccess = (GoogleUser) => {
		let bp = GoogleUser.getBasicProfile();
		let data = {
			email: bp.getEmail(),
			login: bp.getName(),
			token: GoogleUser.getAuthResponse().id_token,
			image: bp.getImageUrl(),
		};
		props.setUserData(data);
		props.setIsSignedIn(GoogleUser.isSignedIn());
	}
	let onFailure = () => {
		alert("Failure");
	}
	return <GoogleLogin
		clientId={props.GOOGLE_CLIENT_ID}
		buttonText="Login"
		onSuccess={onSuccess}
		onFailure={onFailure}
		cookiePolicy={'single_host_origin'}
	/>
}

export default LogInButton;