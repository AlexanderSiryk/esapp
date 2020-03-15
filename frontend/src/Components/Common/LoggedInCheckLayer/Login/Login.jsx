import React from "react";

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.gapi = window.gapi;
	}

	onSignIn = () => {
		this.props.logIn();
	}

	onSuccess = (GoogleUser) => {
		this.props.setIsSignedIn(GoogleUser.isSignedIn())
	}

	onFailure = () => {
		alert("Failure");
	}

	componentDidMount() {
		this.gapi.load("auth2", () => {
			this.gapi.auth2.init({
				client_id: "543293527953-vts0fcpac0jn00ihje2sqomqpe37u866.apps.googleusercontent.com",
			});
		});
		window.gapi.signin2.render('g-signin2', {
			theme: 'dark',
			'onsuccess': this.onSuccess,
			'onfailure': this.onFailure,
		});
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