export const gButtonOperations = {
	logIn: () => {
		let GoogleAuth = window.gapi.auth2.getAuthInstance();
		return GoogleAuth.signIn().then(() => {
			let GoogleUser = GoogleAuth.currentUser.get();
			let bp = GoogleUser.getBasicProfile();
			return {
				isSignedIn: GoogleUser.isSignedIn(),
				data: {
					email: bp.getEmail(),
					login: bp.getName(),
					token: GoogleUser.getAuthResponse().id_token,
					image: bp.getImageUrl(),
				},
			}
		});
	},
	logOut: () => {
		return new Promise((resolve) => {
			let GoogleAuth = window.gapi.auth2.getAuthInstance();
			let GoogleUser = GoogleAuth.currentUser.get();
			GoogleAuth.signOut().then(() => resolve(GoogleUser.isSignedIn()));
		});
	},
	loadButton: () => {
		window.gapi.load("auth2", () => {
			window.gapi.auth2.init({
				client_id: "543293527953-vts0fcpac0jn00ihje2sqomqpe37u866.apps.googleusercontent.com",
			});
		});
	},
	renderButton: (id, onSuccess, onFailure) => {
		window.gapi.signin2.render(id, {
			theme: 'dark',
			'onsuccess': onSuccess,
			'onfailure': onFailure,
		});
	},
}