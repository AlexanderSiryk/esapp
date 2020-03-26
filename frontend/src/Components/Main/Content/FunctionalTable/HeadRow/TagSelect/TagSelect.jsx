import React from "react";
import s from "./TagSelect.module.css"

let TagSelect = ({applyTag, uniqueTags, tagSelected}) => {
	let tagsOptions = uniqueTags.map((item, index) => {
		return <option value={item} key={index}>{item}</option>
	});
	let onTagChange = (event) => {
		applyTag(event.target.value);
	}
	return <select className={s.tags} onChange={onTagChange} value={tagSelected}>
		<option value="blank" key="0">select a tag</option>
		{tagsOptions}
	</select>
}

export default TagSelect;