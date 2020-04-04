import React, {useState} from "react";
import s from "./DataTable.module.css"
import MaterialTable from "material-table";
import {
	Add, Check, Clear, DeleteOutline, ChevronRight, Edit,
	SaveAlt, FilterList, FirstPage, LastPage, ChevronLeft,
	Search, ArrowUpward, Remove, ViewColumn
} from "@material-ui/icons";

const icons = {
	Add,
	Check,
	Clear,
	Delete: DeleteOutline,
	DetailPanel: ChevronRight,
	Edit,
	Export: SaveAlt,
	Filter: FilterList,
	FirstPage,
	LastPage,
	NextPage: ChevronRight,
	PreviousPage: ChevronLeft,
	ResetSearch: Clear,
	Search,
	SortArrow: ArrowUpward,
	ThirdStateCheck: Remove,
	ViewColumn,
}

let DataTable = (props) => {
	let headRow = <div className={`${s.tableRow} ${s.tableRowHead}`} key={0}>
		<div className={s.tableCol}>Name</div>
		<div className={s.tableCol}>Login</div>
		<div className={s.tableCol}>Password</div>
		<div className={s.tableCol}>Tag</div>
	</div>

	let onNameDbClick = (id) => {
		props.toggleEditWindow(id);
	}

	let rows = [headRow, ...props.filteredTableEntries.map((item) => {
		return <div className={`${s.tableRow}`} key={item.id}>
			<div
				className={s.tableCol}
				onDoubleClick={onNameDbClick.bind(null, item.id)}
			>{item.name}</div>
			<div className={s.tableCol}>{item.login}</div>
			<div className={s.tableCol}>{item.password}</div>
			<div className={s.tableCol}>{`#${item.tag || ""}`}</div>
		</div>
	})];
	let dataTableOld = <div className={s.tableContainer}>
		{rows}
	</div>;
	return MaterialDataTable();
}

export default DataTable;


function MaterialDataTable() {
	const [state, setState] = useState({
		columns: [
			{title: 'Name', field: 'name'},
			{title: 'Surname', field: 'surname'},
			{title: 'Birth Year', field: 'birthYear', type: 'numeric'},
			{
				title: 'Birth Place',
				field: 'birthCity',
				lookup: {34: 'New York', 63: 'London'},
			},
		],
		data: [
			{name: 'John', surname: 'Smith', birthYear: 1987, birthCity: 63},
			{
				name: 'Dale',
				surname: 'Cooper',
				birthYear: 2017,
				birthCity: 34,
			},
		],
	});

	return (
		<MaterialTable
			title="Accounts"
			columns={state.columns}
			data={state.data}
			icons={icons}
			editable={{
				onRowAdd: (newData) => new Promise((resolve) => {
					setTimeout(() => {
						resolve();
						setState((prevState) => {
							const data = [...prevState.data];
							data.push(newData);
							return {...prevState, data};
						});
					}, 600);
				}),
				onRowUpdate: (newData, oldData) => new Promise((resolve) => {
					setTimeout(() => {
						resolve();
						if (oldData) {
							setState((prevState) => {
								const data = [...prevState.data];
								data[data.indexOf(oldData)] = newData;
								return {...prevState, data};
							});
						}
					}, 600);
				}),
				onRowDelete: (oldData) => new Promise((resolve) => {
					setTimeout(() => {
						resolve();
						setState((prevState) => {
							const data = [...prevState.data];
							data.splice(data.indexOf(oldData), 1);
							return {...prevState, data};
						});
					}, 600);
				}),
			}}
		/>
	);
}
