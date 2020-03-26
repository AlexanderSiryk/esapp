import React from "react";
import s from "./HeadRow.module.css"
import SearchFieldContainer from "./SearchField/SearchFieldContainer";
import TagSelectContainer from "./TagSelect/TagSelectContainer";
import AddNewInstanceButtonContainer from "./AddNewInstanceButton/AddNewInstanceButtonContainer";

let HeadRow = () => {
	return <div className={s.headRow}>
		<div className={s.wrapper}>
			<SearchFieldContainer/>
			<TagSelectContainer/>
			<AddNewInstanceButtonContainer/>
		</div>
	</div>
}

export default HeadRow;