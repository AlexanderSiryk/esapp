import React from "react";
import s from "./LockContainer.module.css";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => {
	const backgroundColor = theme.palette.type === "light"
		? theme.palette.grey[50]
		: theme.palette.grey[900];
	const borderColor = theme.palette.type === "light"
		? theme.palette.grey["A400"]
		: theme.palette.grey["A200"];
	const bodyColor = theme.palette.type === "light"
		? theme.palette.grey["A700"]
		: theme.palette.grey[800];
	const fontColor = theme.palette.grey[50];
	return ({
		main: {
			backgroundColor: backgroundColor,
		},
		lock: {
			borderColor: borderColor,
		},
		underlock: {
			borderLeftColor: borderColor,
			borderRightColor: borderColor,
			background: backgroundColor,
		},
		lockHide: {
			borderColor: backgroundColor,
			backgroundColor: backgroundColor,
		},
		body: {
			borderColor: borderColor,
			backgroundColor: bodyColor,
			color: fontColor,

		}
	})
});

let LockContainer = ({children, animationTriggered, onFileHandle}) => {
	const t = useStyles();

	const clearDefaultBehaviour = (e) => {
		e.preventDefault();
		e.stopPropagation();
	}
	const onDrop = (e) => { // Lifts up dropped file
		clearDefaultBehaviour(e);
		if (e.dataTransfer?.files.length) onFileHandle(e.dataTransfer.files[0]);
	}

	return (
		<div className={`${s.main} ${t.main}`}>
			<div className={s.container}>
				<div className={`${s.body} ${t.body}`}
					 onDrop={onDrop}
					 onDragOver={clearDefaultBehaviour}
				>{children}</div>
				<div className={animationTriggered
					? `${s.lockContainer} ${t.lockContainer} ${s.animate}`
					: `${s.lockContainer} ${t.lockContainer}`}>
					<div className={`${s.lock} ${t.lock}`}/>
					<div className={`${s.underlock} ${t.underlock}`}/>
					<div className={`${s.lockHide} ${t.lockHide}`}/>
				</div>
				<div className={s.fixContainerHeight}/>
			</div>
		</div>
	);
};

export default LockContainer;
