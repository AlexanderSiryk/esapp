import React from "react";
import DataTableContainer from "./DataTable/DataTableContainer";
import SearchFieldContainer from "./SearchField/SearchFieldContainer";
import TagSelectContainer from "./TagSelect/TagSelectContainer";
import s from "./FunctionalTable.module.css"

let FunctionalTable = () => {
	return (
		<>
			<div className={s.row}>
				<SearchFieldContainer/>
				<TagSelectContainer/>
			</div>
			<DataTableContainer/>
		</>
	);
};

export default FunctionalTable;