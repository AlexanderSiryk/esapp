import React from "react";

let LogOutButton = (props) => {
	let signOut = () => {
		props.logOut();
		props.resetLayers();
		props.resetSidebar();
		props.resetContent();
	}
	return (
		<>
			<button onClick={signOut}>Log out</button>
		</>
	);
};

export default LogOutButton;