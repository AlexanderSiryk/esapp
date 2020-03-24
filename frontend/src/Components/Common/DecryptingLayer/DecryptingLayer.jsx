import React from "react";
import {Redirect} from "react-router-dom";
import DecryptWindowContainer from "./DecryptWindow/DecryptWindowContainer";
import Main from "../../Main/Main";
import Sidebar from "../../Sidebar/Sidebar";

let DecryptingLayer = ({isDecrypted}) => {
	return isDecrypted
		? <>
			<Sidebar/>
			<Main/>
			<Redirect
				to={{
					pathname: "/content"
				}}
			/>
		</>
		: <>
			<DecryptWindowContainer/>
			<Redirect
				to={{
					pathname: "/"
				}}
			/>
		</>;
}

export default DecryptingLayer;