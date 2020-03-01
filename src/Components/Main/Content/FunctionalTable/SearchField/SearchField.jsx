import React from "react";

let SearchField = (props) => {
	let onTextChange = (e) => {
		props.updateSearchBarText(e.target.value);
		if (e.target.value !== "") {
			let filteredEntries = props.tableEntries;
			filteredEntries = filteredEntries.filter((item) => {
				return item.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1;
			});
			props.applySearchQuerry(filteredEntries);
		} else {
			props.applySearchQuerry(props.tableEntries);
		}
	};
	return (
		<input type="text" value={props.searchBarText} onChange={onTextChange}/>
	);
};

export default SearchField;