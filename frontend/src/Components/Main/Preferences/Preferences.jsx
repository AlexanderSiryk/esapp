import React from "react";

let Preferences = (props) => {
	let signOut = () => {
		props.logOut();
	}
	return (
		<>
			<button onClick={signOut}>Log out</button>
		</>
	);
};

export default Preferences;