import React from "react";

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.gapi = window.gapi;
	}

	onSuccess = (GoogleUser) => {
		let bp = GoogleUser.getBasicProfile();
		console.dir({
			0: GoogleUser.isSignedIn(),
			1: GoogleUser.getId(),
			2: GoogleUser.getHostedDomain(),
			3: GoogleUser.getGrantedScopes(),
			4: GoogleUser.getBasicProfile(),
			5: GoogleUser.getAuthResponse().id_token,
			6: bp.getEmail(),
			7: bp.getName(),
			8: bp.getImageUrl(),
			9: bp.getGivenName(),
			10: bp.getFamilyName(),
		});
		this.props.setUserData({
			mail: bp.getEmail(),
			login: bp.getName(),
			token: GoogleUser.getAuthResponse().id_token,
			image: bp.getImageUrl(),
		});
		this.props.setIsSignedIn(GoogleUser.isSignedIn());
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
						className="g-signin2"
						data-theme="dark"/>
				</header>
			</div>
		)
	}
}

export default Login;

//
// Sign out
//

/*someClick = () => {
		let GoogleUser = this.GoogleAuth.currentUser.get();
		/!*alert(GoogleUser.getId());
		console.log({
			0: GoogleUser.isSignedIn(),
			1: GoogleUser.getId(),
			2: GoogleUser.getHostedDomain(),
			3: GoogleUser.getGrantedScopes(),
			4: GoogleUser.getBasicProfile(),
			5: GoogleUser.getAuthResponse().id_token,
		});*!/
		this.props.setIsSignedIn(GoogleUser.isSignedIn());
	}

	signOut = () => {
		let auth2 = this.gapi.auth2.getAuthInstance();
		auth2.signOut().then(() => {
			console.log('User signed out.');
		});
	}*/
/*
<button onClick={this.someClick}>Continue to page</button>
<button onClick={this.signOut}>logOut</button>*/