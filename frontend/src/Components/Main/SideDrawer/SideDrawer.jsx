import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import makeStyles from "@material-ui/core/styles/makeStyles";
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import AllInboxRoundedIcon from '@material-ui/icons/AllInboxRounded';
import {NavLink} from "react-router-dom";

const useStyles = makeStyles({
	list: {
		width: 250,
	},
});

const SideDrawer = ({isSidebarShown, toggleSidebar}) => {
	return <>
		<Drawer anchor="left"
				open={isSidebarShown}
				onClose={toggleSidebar}
		>
			<NavList/>
		</Drawer>
	</>
}

const NavList = () => {
	const classes = useStyles();
	return <>
		<div className={classes.list}>
			<List component="nav" aria-label="main mailbox folders">
				<NavLink to="content">
					<ListItem button>
						<ListItemIcon>
							<AllInboxRoundedIcon/>
						</ListItemIcon>
						<ListItemText primary="Content"/>
					</ListItem>
				</NavLink>
				<NavLink to="trash">
					<ListItem button>
						<ListItemIcon>
							<DeleteRoundedIcon/>
						</ListItemIcon>
						<ListItemText primary="Trash"/>
					</ListItem>
				</NavLink>
			</List>
		</div>
	</>
}

export default SideDrawer;