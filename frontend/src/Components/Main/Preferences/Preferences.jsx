import React from "react";

let Preferences = () => {
	/*let auth2 = window.gapi.auth2.getAuthInstance();*/
	let signOut = () => {
		/*debugger;
		auth2.signOut().then(() => {
			console.log('User signed out.');
			let GoogleUser = auth2.GoogleAuth.currentUser.get();
			props.setIsSignedIn(false);
		});*/
	}
	return (
		<>
			<button onClick={signOut}>Log out</button>
		</>
	);
};

export default Preferences;