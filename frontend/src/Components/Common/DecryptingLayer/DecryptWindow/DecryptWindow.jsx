import React, {useRef, useState} from "react";
import {decryptEntries} from "../../../../API/encryptingOperations";
import LoadingWindow from "../../LoadingWindow/LoadingWindow";
let DecryptWindow = ({getImage, calcKey, tableEntries, isFetching, ...props}) => {
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
		<div>
			{isFetching && <LoadingWindow/>}
			<h2 style={{color: "wheat"}}>Please, decrypt using the image</h2>
			<input type="file" onChange={onInputChange}/>
			<canvas ref={canvas} style={{position: "absolute", zIndex: -10}}/>
		</div>
	</div>
}

export default DecryptWindow;