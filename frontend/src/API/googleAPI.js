export const gButtonOperations = {
	logIn: () => {
		let GoogleAuth = window.gapi.auth2.getAuthInstance();
		return GoogleAuth.signIn().then(() => {
			let GoogleUser = GoogleAuth.currentUser.get();
			let bp = GoogleUser.getBasicProfile();
			return {
				isSignedIn: GoogleUser.isSignedIn(),
				data: {
					mail: bp.getEmail(),
					login: bp.getName(),
					token: GoogleUser.getAuthResponse().id_token,
					image: bp.getImageUrl(),
				},
			}
		});
	},
	logOut: () => {
		let GoogleAuth = window.gapi.auth2.getAuthInstance();
		let GoogleUser = GoogleAuth.currentUser.get();
		return GoogleAuth.signOut().then(() => GoogleUser.isSignedIn());
	},
}