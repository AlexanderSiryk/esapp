import React from "react";
import s from "./LoadingWindow.module.css"

let LoadingWindow = () => {
	return (
		<div className={s.overlay}>
			<svg className={s.spinner} width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
				<circle className={s.path} fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33"
						r="30"/>
			</svg>
		</div>
	);
}

export default LoadingWindow;