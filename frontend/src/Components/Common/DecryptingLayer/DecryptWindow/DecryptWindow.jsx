import React, {useRef} from "react";
import s from "./DecryptWindow.module.css";
import {decryptEntries} from "../../../../API/encryptingOperations";

let DecryptWindow = ({imageKey, ...props}) => {
	let onInputChange = (e) => {
		if (e.target.files.length) {
			if (e.target.files[0].type !== "image/png" &&
				e.target.files[0].type !== "image/jpeg") {
				alert("Wrong file type");
				e.target.value = null;
				throw new Error("Wrong file type");
			}
			const reader = new FileReader();
			reader.readAsDataURL(e.target.files[0]);
			reader.onload = function () {
				props.setImageKey(this.result);
			}
		}
	}
	const canvas = useRef(null);
	if (imageKey) {
		props.getImage(imageKey).then((img) => {
			if (img.width !== 252 || img.height !== 285) {
				alert("Incorrect image key");
				throw new Error("Incorrect image key");
			}
			canvas.current.width = img.width;
			canvas.current.height = img.height;
			const ctx = canvas.current.getContext('2d');
			ctx.drawImage(img, 0, 0);
			let mgData = ctx.getImageData(0, 0, img.width, img.height);
			const key = props.calcKey(mgData.data);
			props.setIsDecrypted(true);

			// Doesn't re-render due to state changes below
			// because of the component set isDecrypted: true
			// so on the next render parent component will not exist
			props.setTableEntriesDecrypted(decryptEntries(props.tableEntries, key));
			props.freeUpImageKey();
		});

	}

	return (
		<>
			<div>
				<h2 style={{color: "wheat"}}>Please, decrypt using the image</h2>
				<input type="file" onChange={onInputChange} className={s.input}/>
				<canvas ref={canvas} style={{position: "absolute", zIndex: -10}}/>
			</div>
		</>
	)
}

export default DecryptWindow;