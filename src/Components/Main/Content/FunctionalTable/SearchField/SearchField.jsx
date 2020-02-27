import React from "react";

let SearchField = (props) => {
	let onTextChange = (e) => {
		props.updateSearchBarText(e.target.value);
		if (e.target.value !== "") {
			let filteredEntries = props.tableEntries;
			filteredEntries = filteredEntries.filter((item) => {
				return item.name.indexOf(e.target.value.toLowerCase()) !== -1;
			});
			props.updateFilteredEntries(filteredEntries);
		} else {
			props.updateFilteredEntries(props.tableEntries);
		}
	};
	return (
		<input type="text" value={props.searchBarText} onChange={onTextChange}/>
	);
};

export default SearchField;