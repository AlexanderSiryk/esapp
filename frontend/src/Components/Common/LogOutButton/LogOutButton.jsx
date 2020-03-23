import React from "react";

let LogOutButton = (props) => {
	let signOut = () => {
		props.logOut().then(isSignedIn => {
			props.setIsSignedIn(isSignedIn);
			props.resetContent();
			props.resetSidebar();
			props.resetLayers();
		});
	}
	return (
		<>
			<button onClick={signOut}>Log out</button>
		</>
	);
}

export default LogOutButton;