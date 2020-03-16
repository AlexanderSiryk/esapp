import React from "react";

let SearchField = (props) => {
	let onTextChange = (e) => {
		props.updateSearchBarText(e.target.value);
		if (props.tagSelected !== "blank") {
			props.clearTag();
		}
	};
	return (
		<input
			type="text"
			value={props.searchBarText}
			onChange={onTextChange}
		/>
	);
};

export default SearchField;