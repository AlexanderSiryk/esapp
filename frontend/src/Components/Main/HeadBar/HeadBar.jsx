import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import Typography from "@material-ui/core/Typography";
import MenuIcon from '@material-ui/icons/Menu';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

const HeadBar = ({toggleSidebar, userImageURL, userLogin}) => {
	const classes = useStyles();
	return <AppBar position="static">
		<Toolbar>
			<IconButton edge="start"
						className={classes.menuButton}
						color="inherit" aria-label="menu"
						onClick={() => {
							toggleSidebar();
						}}
			>
				<MenuIcon/>
			</IconButton>
			<Typography variant="h6" className={classes.title}>
				App
			</Typography>
			<Avatar alt={userLogin} src={userImageURL}/>
		</Toolbar>
	</AppBar>
}

export default HeadBar;