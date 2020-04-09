import React from "react";
import {Route} from "react-router-dom";
import Content from "./Content/Content";
import Trash from "./Trash/Trash";
import HeadBarContainer from "./HeadBar/HeadBarContainer";
import SideDrawerContainer from "./SideDrawer/SideDrawerContainer";

let Main = () => {
	return <div>
		<HeadBarContainer/>
		<SideDrawerContainer/>
		<Route
			path="/content"
			render={() => <Content/>}
		/>
		<Route
			path="/trash"
			render={() => <Trash/>}
		/>
	</div>
}

export default Main;