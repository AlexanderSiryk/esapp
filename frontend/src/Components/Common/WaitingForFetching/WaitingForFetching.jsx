import React from "react";
import s from "./WaitingForFetching.module.css"

let WaitingForFetching = () => {
	return <div className={s.fetchingOverlay}/>
}

export default WaitingForFetching;