import React from "react";
import {Route} from "react-router-dom";
import Content from "./Content/Content";
import Trash from "./Trash/Trash";
import HeadBarContainer from "./HeadBar/HeadBarContainer";
import SideDrawerContainer from "./SideDrawer/SideDrawerContainer";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";


let Main = () => {
	const classes = makeStyles(() => ({
		container: {
			width: 100 + "vw",
			height: 100 + "vh",
		}
	}))();
	return <Box className={classes.container}>
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
	</Box>
}

export default Main;