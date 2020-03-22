import React, {useRef} from "react";
import s from "./DecryptWindow.module.css";
import {decryptEntries, encryptEntries} from "../../../../API/encryptingOperations";

let DecryptWindow = ({imageKey, ...props}) => {
	let onProceedClick = () => {
		props.setIsDecrypted(true);
	}
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
			//props.freeUpImageKey(); TODO free up space in further
			props.setKey(key);
			let encrypted = encryptEntries(props.tableEntries, key);
			let decrypted = decryptEntries(encrypted, key);
			console.log(key);
			console.dir({
				encrypted,
				decrypted,
			});
		});

	}

	return (
		<>
			<div>
				<input type="file" onChange={onInputChange} className={s.input}/>
				<canvas ref={canvas}/>
			</div>
			<div>
				<button onClick={onProceedClick} className={s.button}>Proceed</button>
			</div>
		</>
	)
}

export default DecryptWindow;