import React from "react";
import s from "./Content.module.css"
import FunctionalTable from "./FunctionalTable/FunctionalTable";


let Content = () => {
	return <div className={s.container}>
		<FunctionalTable/>
	</div>
}

export default Content;