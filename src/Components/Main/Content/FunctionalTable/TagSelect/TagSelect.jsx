import React from "react";
import s from "./TagSelect.module.css"

let TagSelect = (props) => {
	let tagsOptions = props.tableEntries.map((item) => {
		return item.tag;
	});
	tagsOptions = tagsOptions.filter((item, index, arr) => {
		return arr.indexOf(item) === index;
	});
	tagsOptions = tagsOptions.map((item, index) => {
		return (
			<option value={item} key={index}>{item}</option>
		);
	});
	let dropdownRef = React.createRef();
	let onTagChange = () => {
		let filteredEntries = [...props.tableEntries];
		if (dropdownRef.current.value !== "blank") {
			filteredEntries = filteredEntries.filter((item) => {
				return item.tag === dropdownRef.current.value;
			});
		}
		props.applyTag(filteredEntries);
	};

	return (
		<select className={s.tags} onChange={onTagChange} ref={dropdownRef}>
			<option value="blank" key="0">select a tag</option>
			{tagsOptions}
		</select>
	);
};

export default TagSelect;