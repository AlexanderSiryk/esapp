import React, {useRef, useState} from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import PasswordInput from "../../../Common/PasswordInput/PasswordInput";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {generateImageKey} from "../../../../API/encryptingOperations";

const useStyle = makeStyles(() => ({
	text: {
		width: 252 + "px",
		marginBottom: 5 + "px",
	}
}));

const GettingTheKeyModal = ({isShown, toggleKeyModal, salt, generateKey}) => {
	const canvas = useRef(null);
	const classes = useStyle();
	const [disabledButton, setDisabledButton] = useState(true);
	const [key, setKey] = useState("");
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
	const handleInputChange = (value) => {
		setKey(generateKey(value, salt));
		if (disabledButton) setDisabledButton(false);
		if (!value) setDisabledButton(true);
		const arr = generateImageKey(value, salt);
		if (canvas.current) {
			let mgDataModified = new ImageData(arr, 252, 285);
			const ctx = canvas.current.getContext('2d');
			ctx.putImageData(mgDataModified, 0, 0);
		}
	}
	const handleDownloadClick = () => {
		localStorage.setItem("keyGenerated", key);
		toggleKeyModal();
	}

	return <>
		<Dialog
			fullScreen={fullScreen}
			open={isShown}
			aria-labelledby="responsive-dialog-title"
		>
			<DialogTitle id="responsive-dialog-title">Key generation</DialogTitle>
			<DialogContent>
				<PasswordInput className={classes.text} onChange={handleInputChange} autoFocus/>
				<div>
					<canvas ref={canvas} width={252} height={285} style={{
						background: "black",
						borderRadius: "5px",
					}}/>
				</div>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleDownloadClick} color="primary" disabled={disabledButton}>
					Download the key
				</Button>
			</DialogActions>
		</Dialog>
	</>
}

export default GettingTheKeyModal;