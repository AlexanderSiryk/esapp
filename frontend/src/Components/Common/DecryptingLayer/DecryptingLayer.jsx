import React from "react";
import {Redirect} from "react-router-dom";
import DecryptWindowContainer from "./DecryptWindow/DecryptWindowContainer";
import SidebarContainer from "../../Sidebar/SidebarContainer";
import Main from "../../Main/Main";

let DecryptingLayer = ({isDecrypted}) => {
	return (
		<>
			{
				isDecrypted &&
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
				!isDecrypted &&
				<>
					<DecryptWindowContainer/>
				</>
			}
		</>
	);
}

export default DecryptingLayer;