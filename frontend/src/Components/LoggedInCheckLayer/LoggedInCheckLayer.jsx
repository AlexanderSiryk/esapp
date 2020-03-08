import React from "react";
import SidebarContainer from "../Sidebar/SidebarContainer";
import Main from "../Main/Main";
import Login from "../Login/Login";
import {Redirect, Route} from "react-router-dom";

let LoggedInCheckLayer = (props) => {
	return (
		<>
			{
				props.loggedIn &&
				<>
					<SidebarContainer/>
					<Main/>
				</>
			}
			{
				!props.loggedIn &&
				<>
					<Route
						path="/login"
						render={() => <Login/>}
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