import React from "react";
import s from "./DataTable.module.css"

let DataTable = () => {
	return (
		<>
			<div className={s.tableContainer}>
				<div className={`${s.tableRow} ${s.tableRowHead}`}>
					<div className={s.tableCol}>Name</div>
					<div className={s.tableCol}>Login</div>
					<div className={s.tableCol}>Password</div>
					<div className={s.tableCol}>Tag</div>
				</div>
				<div className={s.tableRow}>
					<div className={s.tableCol}>Lorem.</div>
					<div className={s.tableCol}>Lorem.</div>
					<div className={s.tableCol}>Lorem.</div>
					<div className={s.tableCol}>Lorem.</div>
				</div>
				<div className={s.tableRow}>
					<div className={s.tableCol}>Lorem.</div>
					<div className={s.tableCol}>Lorem.</div>
					<div className={s.tableCol}>Lorem.</div>
					<div className={s.tableCol}>Lorem.</div>
				</div>
			</div>
		</>
	);
};

export default DataTable;