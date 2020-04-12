import React, {useRef, useState} from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import PasswordInput from "../../../Common/PasswordInput/PasswordInput";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {generateImageKey} from "../../../../API/encryptingOperations";

const useStyle = makeStyles(() => ({
	text: {
		maxWidth: 24 + "ch",
	}
}));

const GettingTheKeyModal = ({isShown, toggleKeyModal, salt, generateKey}) => {
	const canvas = useRef(null);
	const classes = useStyle();
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
	const [key, setKey] = useState(generateKey("", salt));
	const handleInputChange = (value) => {
		setKey(generateKey(value, salt));
		const arr = generateImageKey(value, salt);
		if (canvas.current) {
			let mgDataModified = new ImageData(arr, 252, 285);
			const ctx = canvas.current.getContext('2d');
			ctx.putImageData(mgDataModified, 0, 0);
		}
	}

	return <>
		<Dialog
			fullScreen={fullScreen}
			open={isShown}
			onClose={toggleKeyModal}
			aria-labelledby="responsive-dialog-title"
		>
			<DialogTitle id="responsive-dialog-title">Getting the key</DialogTitle>
			<DialogContent>
				<PasswordInput onChange={handleInputChange} autoFocus/>
				<Typography className={classes.text} noWrap>{key}</Typography>
				<canvas ref={canvas} width={252} height={285} style={{
					background: "black",
					borderRadius: "5px",
				}}/>
			</DialogContent>
			<DialogActions>
				<Button onClick={toggleKeyModal} color="primary">
					Download the key
				</Button>
			</DialogActions>
		</Dialog>
	</>
}

export default GettingTheKeyModal;