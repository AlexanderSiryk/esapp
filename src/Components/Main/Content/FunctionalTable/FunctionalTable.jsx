import React from "react";
import DataTableContainer from "./DataTable/DataTableContainer";
import SearchFieldContainer from "./SearchField/SearchFieldContainer";
import TagSelectContainer from "./TagSelect/TagSelectContainer";

let FunctionalTable = () => {
	return (
		<>
			<div>
				<SearchFieldContainer/>
				<TagSelectContainer/>
			</div>
			<DataTableContainer/>
		</>
	);
};

export default FunctionalTable;