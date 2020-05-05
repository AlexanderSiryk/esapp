import React, {useState} from "react";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import LogOutButtonContainer from "../../../Common/LogOutButton/LogOutButtonContainer";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
	container: {
		padding: theme.spacing(1.5),
	},
	logoutBtn: {
		marginTop: theme.spacing(3),
	},
}));

const UserActionsModal = ({children, userLogin, userEmail}) => {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = useState(null);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	}
	const handleClose = () => {
		setAnchorEl(null);
	}
	const open = !!anchorEl;
	const id = open ? 'userActions' : undefined;

	return (userLogin && userEmail)
		? <>
			<div onClick={handleClick}>
				<Tooltip title="More actions">
					{children}
				</Tooltip>
			</div>
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center',
				}}
			>
				<Box className={classes.container}>
					<Typography color="textPrimary" variant="h6">{userLogin}</Typography>
					<Typography color="textSecondary">{userEmail}</Typography>
					<LogOutButtonContainer className={classes.logoutBtn} buttonText="LogOut"/>
				</Box>
			</Popover>
		</>
		: children
}

export default UserActionsModal;