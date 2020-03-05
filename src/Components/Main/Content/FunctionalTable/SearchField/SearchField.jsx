import React from "react";

let SearchField = (props) => {
	let onTextChange = (e) => {
		props.updateSearchBarText(e.target.value);
	};
	return (
		<input type="text" value={props.searchBarText} onChange={onTextChange}/>
	);
};

export default SearchField;