import React from "react";
import GoogleLogin from "react-google-login";

let LogInButton = ({clientId, setUserData, setIsSignedIn}) => {
	let onSuccess = (GoogleUser) => {
		let bp = GoogleUser.getBasicProfile();
		let data = {
			email: bp.getEmail(),
			login: bp.getName(),
			token: GoogleUser.getAuthResponse().id_token,
			image: bp.getImageUrl(),
		}
		setUserData(data);
		setIsSignedIn(GoogleUser.isSignedIn());
	}
	let onFailure = () => {
		alert("Failure");
	}
	return <GoogleLogin
		clientId={clientId}
		buttonText="Login"
		onSuccess={onSuccess}
		onFailure={onFailure}
		cookiePolicy={'single_host_origin'}
	/>
}

export default LogInButton;