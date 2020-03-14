import React from "react";
import SidebarContainer from "../Sidebar/SidebarContainer";
import Main from "../Main/Main";
import {Redirect, Route} from "react-router-dom";
import LoginContainer from "./Login/LoginContainer";

let LoggedInCheckLayer = (props) => {
	return (
		<>
			{
				props.isSignedIn &&
				<>
					<SidebarContainer/>
					<Main/>
					<Redirect
						to={{
							pathname: "/content"
						}}
					/>
				</>
			}
			{
				!props.isSignedIn &&
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