import React from "react";
import {gButtonOperations} from "../../../../API/googleAPI";

// TODO refactor Login to the functional component

class Login extends React.Component {
	onSignIn = () => {
		this.props.logIn();
	}

	onSuccess = (GoogleUser) => {
		let bp = GoogleUser.getBasicProfile();
		let data = {
			email: bp.getEmail(),
			login: bp.getName(),
			token: GoogleUser.getAuthResponse().id_token,
			image: bp.getImageUrl(),
		};
		this.props.setUserData(data);
		this.props.setIsSignedIn(GoogleUser.isSignedIn())
	}

	onFailure = () => {
		alert("Failure");
	}

	componentDidMount() {
		gButtonOperations.loadButton();
		gButtonOperations.renderButton("g-signin2", this.onSuccess, this.onFailure);
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<div
						id="g-signin2"
						onClick={this.onSignIn}
						className="g-signin2"
						data-theme="dark"/>
				</header>
			</div>
		)
	}
}

export default Login;