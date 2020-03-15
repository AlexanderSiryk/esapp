import React from "react";
import s from "./DataTable.module.css"

let DataTable = (props) => {
	let headRow = (
		<div className={`${s.tableRow} ${s.tableRowHead}`} key={0}>
			<div className={s.tableCol}>Name</div>
			<div className={s.tableCol}>Login</div>
			<div className={s.tableCol}>Password</div>
			<div className={s.tableCol}>Tag</div>
		</div>
	);

	let onNameDbClick = (id) => {
		props.toggleEditWindow(id);
	};

	let rows = [headRow, ...props.filteredTableEntries.map((item) => {
		return (
			<div className={`${s.tableRow}`} key={item.id}>
				<div
					className={s.tableCol}
					onDoubleClick={onNameDbClick.bind(null, item.id)}
				>{item.name}</div>
				<div className={s.tableCol}>{item.login}</div>
				<div className={s.tableCol}>{item.password}</div>
				<div className={s.tableCol}>{`#${item.tag}`}</div>
			</div>
		);
	})];

	return (
		<div className={s.tableContainer}>
			{rows}
		</div>
	);
};

export default DataTable;