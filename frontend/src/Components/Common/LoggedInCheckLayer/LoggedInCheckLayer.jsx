import React from "react";
import {Redirect, Route} from "react-router-dom";
import DecryptingLayerContainer from "../DecryptingLayer/DecryptingLayerContainer";
import LoginPage from "./LoginPage/LoginPage";

let LoggedInCheckLayer = ({isSignedIn}) => {
	return isSignedIn
		? <DecryptingLayerContainer/>
		: <>
			<Route
				path="/login"
				render={() => <LoginPage/>}
			/>
			<Redirect
				to={{
					pathname: "/login"
				}}
			/>
		</>;
}

export default LoggedInCheckLayer;