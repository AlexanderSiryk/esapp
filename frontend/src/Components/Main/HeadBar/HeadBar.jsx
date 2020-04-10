import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import Typography from "@material-ui/core/Typography";
import MenuIcon from '@material-ui/icons/Menu';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Avatar from "@material-ui/core/Avatar";
import UserActionsModal from "./UserActionsModal/UserActionsModal";
import Button from "@material-ui/core/Button";
import VpnKeyIcon from '@material-ui/icons/VpnKey';

const useStyles = makeStyles((theme) => ({
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	clickIcon: {
		cursor: "pointer",
	},
	button: {
		marginRight: theme.spacing(5),
	}
}));

const HeadBar = ({toggleSidebar, userImageURL, userLogin, userEmail}) => {
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
			<Button
				variant="contained"
				color="primary"
				className={classes.button}
				startIcon={<VpnKeyIcon/>}
			>
				Get the key
			</Button>
			<UserActionsModal {...{userEmail, userLogin}}>
				<Avatar className={classes.clickIcon} alt={userLogin} src={userImageURL}/>
			</UserActionsModal>
		</Toolbar>
	</AppBar>
}

export default HeadBar;