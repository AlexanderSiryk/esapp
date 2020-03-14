import React from "react";
import {Redirect, Route} from "react-router-dom";
import DecryptingLayerContainer from "../DecryptingLayer/DecryptingLayerContainer";
import LoginContainer from "./Login/LoginContainer";

let LoggedInCheckLayer = ({isSignedIn}) => {
	return (
		<>
			{
				isSignedIn &&
				<>
					<DecryptingLayerContainer/>
				</>
			}
			{
				!isSignedIn &&
				<>
					<Route
						path="/login"
						render={() => <LoginContainer/>}
					/>
					<Redirect
						to={{
							pathname: "/login"
						}}
					/>
				</>
			}
		</>
	);
};

export default LoggedInCheckLayer;