import React, {useRef, useState} from "react";
import {decryptEntries} from "../../../../API/encryptingOperations";
import LoadingWindow from "../../LoadingWindow/LoadingWindow";
import LockContainer from "./LockContainer/LockContainer";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = (canvW, canvH) => makeStyles(() => ({
	canvas: {
		position: "absolute",
		zIndex: -10,
		top: -canvH + "px",
		left: -canvH + "px",
	},
	filesOverlay: {
		height: 100 + "vh",
		width: 100 + "vw",
		position: "absolute",
		top: 0,
		left: 0,
		zIndex: 5,
	},
	input: {
		display: "none",
	},
	dropLabel: {
		width: 100 + "%",
		height: 100 + "%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		cursor: "pointer",
	}
}))

let DecryptWindow = ({getImage, calcKey, tableEntries, isFetching, ...props}) => {
	if (isFetching) props.fetchEntries();
	const canvas = useRef(null);
	const [imageKey, setImageKey] = useState(null);
	const [fileDropping, setFileDropping] = useState(false);
	const IMAGE_KEY_WIDTH = 252;
	const IMAGE_KEY_HEIGHT = 285;
	const s = useStyles(IMAGE_KEY_WIDTH, IMAGE_KEY_HEIGHT)();

	const setImageFromFile = (file) => {
		if (file.type !== "image/png" &&
			file.type !== "image/jpeg") {
			alert("Wrong file type");
			throw new Error("Wrong file type");
		}
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = function () {
			setImageKey(this.result);
		}
	}

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

	const onInputChange = (e) => {
		if (e.target?.files.length) setImageFromFile(e.target.files[0]);
	}
	const clearDefaultBehaviour = (e) => {
		e.preventDefault();
		e.stopPropagation();
	}
	const onFileEnter = (e) => {
		clearDefaultBehaviour(e);
		setFileDropping(true);
	}
	const onFileDragOver = (e) => {
		// TODO debounce function
		clearDefaultBehaviour(e);
	}
	const onFileDragLeave = () => {
		setFileDropping(false);
	}
	const onFileDrop = (e) => {
		clearDefaultBehaviour(e);
		setFileDropping(false);
		if (e.dataTransfer?.files.length) setImageFromFile(e.dataTransfer.files[0]);
	}

	return (
		<div>
			{isFetching && <LoadingWindow/>}
			<div className={s.filesOverlay}
				 onDrop={onFileDrop}
				 onDragEnter={onFileEnter}
				 onDragOver={onFileDragOver}
				 onDragLeave={onFileDragLeave}
			/>
			<LockContainer animationTriggered={fileDropping}
						   onFileHandle={(file) => setImageFromFile(file)}>
				<label htmlFor="fileInput"
					   className={s.dropLabel}
					   onDragEnter={onFileEnter}
					   onDragLeave={onFileDragLeave}>
					Pick/Drop<br/>your key
				</label>
			</LockContainer>

			<input type="file" id="fileInput" className={s.input} onChange={onInputChange}/>
			<canvas ref={canvas} className={s.canvas}/>
		</div>
	);
}

export default DecryptWindow;