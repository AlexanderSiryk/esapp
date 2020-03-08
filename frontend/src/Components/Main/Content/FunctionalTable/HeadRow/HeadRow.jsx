import React from "react";
import s from "./HeadRow.module.css"
import SearchFieldContainer from "./SearchField/SearchFieldContainer";
import TagSelectContainer from "./TagSelect/TagSelectContainer";
import AddNewInstanceButton from "./AddNewInstanceButton/AddNewInstanceButton";

let HeadRow = (props) => {
	return (
		<div className={s.headRow}>
			<div className={s.wrapper}>
				<SearchFieldContainer/>
				<TagSelectContainer/>
				<AddNewInstanceButton
					toggleAddWindow={props.toggleAddWindow}
				/>
			</div>
		</div>
	);
};

export default HeadRow;