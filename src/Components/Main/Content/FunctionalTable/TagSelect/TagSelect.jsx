import React from "react";
import s from "./TagSelect.module.css"

let TagSelect = (props) => {
	let tagsOptions = props.uniqueTags.map((item, index) => {
		return (
			<option value={item} key={index}>{item}</option>
		);
	});
	let onTagChange = (event) => {
		props.applyTag(event.target.value);
	};
	return (
		<select className={s.tags} onChange={onTagChange} value={props.tagSelected}>
			<option value="blank" key="0">select a tag</option>
			{tagsOptions}
		</select>
	);
};

export default TagSelect;