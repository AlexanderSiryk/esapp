import React, {useRef, useState} from "react";
import s from "./DecryptWindow.module.css";
import {decryptEntries} from "../../../../API/encryptingOperations";
import LoadingWindow from "../../LoadingWindow/LoadingWindow";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
	root: {
		height: '100vh',
	},
}));

let DecryptWindow = ({getImage, calcKey, tableEntries, isFetching, ...props}) => {
	const styles = useStyles();
	if (isFetching) props.fetchEntries();
	let [imageKey, setImageKey] = useState(null);
	const IMAGE_KEY_WIDTH = 252;
	const IMAGE_KEY_HEIGHT = 285;

	let onInputChange = (e) => {
		if (e.target.files?.length) {
			if (e.target.files[0].type !== "image/png" &&
				e.target.files[0].type !== "image/jpeg") {
				alert("Wrong file type");
				e.target.value = null;
				throw new Error("Wrong file type");
			}
			const reader = new FileReader();
			reader.readAsDataURL(e.target.files[0]);
			reader.onload = function () {
				setImageKey(this.result);
			}
		}
	}
	const canvas = useRef(null);
	if (imageKey) {
		getImage(imageKey).then((img) => {
			if (img.width !== IMAGE_KEY_WIDTH ||
				img.height !== IMAGE_KEY_HEIGHT) {
				alert("Incorrect image key");
				throw new Error("Incorrect image key");
			}
			canvas.current.width = img.width;
			canvas.current.height = img.height;
			const ctx = canvas.current.getContext('2d');
			ctx.drawImage(img, 0, 0);
			let mgData = ctx.getImageData(0, 0, img.width, img.height);
			const key = calcKey(mgData.data);
			props.setKey(key);
			setImageKey(null);
			props.setTableEntriesDecrypted(decryptEntries(tableEntries, key));
			props.setIsDecrypted(true);
		});
	}
	return <div>
		{isFetching && <LoadingWindow/>}
		<Grid container className={styles.root}>
			<Typography>Please, decrypt using the image</Typography>
			<input type="file" onChange={onInputChange} className={s.input}/>
		</Grid>
		<canvas ref={canvas} style={{position: "absolute", zIndex: -10}}/>
	</div>
}

export default DecryptWindow;