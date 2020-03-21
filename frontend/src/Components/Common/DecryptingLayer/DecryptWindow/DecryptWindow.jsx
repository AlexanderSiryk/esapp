import React, {useRef} from "react";
import s from "./DecryptWindow.module.css"

let DecryptWindow = ({setIsDecrypted, setImageKey, imageKey, calcKey, getImage, setKey}) => {
	let onProceedClick = () => {
		setIsDecrypted(true);
	}
	let onInputChange = (e) => {
		if (e.target.files.length) {
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
			console.dir({width: img.width, height: img.height})
			canvas.current.width = img.width;
			canvas.current.height = img.height;
			const ctx = canvas.current.getContext('2d');
			ctx.drawImage(img, 0, 0);
			let mgData = ctx.getImageData(0, 0, img.width, img.height);
			const key = calcKey(mgData.data);
			setKey(key);
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