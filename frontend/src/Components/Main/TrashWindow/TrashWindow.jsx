import React from "react";
import IconButton from "@material-ui/core/IconButton";
import BuildIcon from '@material-ui/icons/Build';
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

let TrashWindow = () => {
	const classes = makeStyles((theme) => ({
		offset: theme.mixins.toolbar,
		container: {
			width: 100 + "%",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
		}
	}))();

	return <div className={`${classes.container} ${classes.offset}`}>
		<Typography color="textPrimary" variant="h5">
			In progress
		</Typography>
		<br/>
		<IconButton aria-label="delete">
			<BuildIcon/>
		</IconButton>
	</div>
}

export default TrashWindow;
