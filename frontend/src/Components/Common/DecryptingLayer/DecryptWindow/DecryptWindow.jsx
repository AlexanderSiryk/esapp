import React from "react";
import s from "./DecryptWindow.module.css"

let DecryptWindow = ({setIsDecrypted}) => {
	let onProceedClick = () => {
		setIsDecrypted(true);
	}
	return (
		<>
			<div>
				<input type="file" className={s.input}/>
			</div>
			<div>
				<button onClick={onProceedClick} className={s.button}>Proceed</button>
			</div>
		</>
	)
}

export default DecryptWindow;