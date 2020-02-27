import React from "react";

function onlyUnique(value, index, self) {
	return self.indexOf(value) === index;
}

let TagSelect = (props) => {
	let tagsOptions = props.tableEntries.map((item) => {
		return item.tag;
	});
	tagsOptions = tagsOptions.filter(onlyUnique);
	tagsOptions = tagsOptions.map((item, index) => {
		return (
			<option value={item} key={index}>{item}</option>
		);
	});

	return (
		<select id="tags">
			{tagsOptions}
		</select>
	);
};

export default TagSelect;