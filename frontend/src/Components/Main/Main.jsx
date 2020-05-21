import React from "react";
import {Route} from "react-router-dom";
import Content from "./Content/Content";
import TrashWindow from "./TrashWindow/TrashWindow";
import HeadBarContainer from "./HeadBar/HeadBarContainer";
import SideDrawerContainer from "./SideDrawer/SideDrawerContainer";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";


let Main = () => {
	const classes = makeStyles(() => ({
		container: {
			height: 100 + "%",
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
			render={() => <TrashWindow/>}
		/>
	</Box>
}

export default Main;
