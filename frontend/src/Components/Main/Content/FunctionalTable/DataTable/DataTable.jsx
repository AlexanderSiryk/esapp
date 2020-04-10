import React, {forwardRef, useState} from "react";
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import MaterialTable from "material-table";
import LookupAutocompleteInput from "./Components/LookupAutocompleteInput";
import onTableRowUpdate from "./tableOperations/onTableRowUpdate";
import onTableRowDelete from "./tableOperations/onTableRowDelete";
import PasswordInput from "./Components/PasswordInput";
import FieldInput from "./Components/FieldInput";
import onTableRowAdd from "./tableOperations/onTableRowAdd";

const tableIcons = {
	Add: forwardRef((props, ref) => <AddBox {...props} ref={ref}/>),
	Check: forwardRef((props, ref) => <Check {...props} ref={ref}/>),
	Clear: forwardRef((props, ref) => <Clear {...props} ref={ref}/>),
	Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref}/>),
	DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref}/>),
	Edit: forwardRef((props, ref) => <Edit {...props} ref={ref}/>),
	Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref}/>),
	Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref}/>),
	FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref}/>),
	LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref}/>),
	NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref}/>),
	PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref}/>),
	ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref}/>),
	Search: forwardRef((props, ref) => <Search {...props} ref={ref}/>),
	SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref}/>),
	ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref}/>),
	ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref}/>)
};

let DataTable = (props) => {
	let tableEntries = props.filteredTableEntries;
	let tags = props.tags;
	let tableLookup = {};
	for (let i = 0; i < tags.length; i++) {
		tableLookup[tags[i]] = tags[i];
	}
	let tableData = tableEntries.map((item) => ({
		id: item.id,
		name: item.name,
		login: item.login,
		password: item.password,
		tag: item.tag,
	}));

	const [state, setState] = useState({
		columns: [
			{
				title: "Name",
				field: "name",
				filtering: false,
				editComponent: props => <FieldInput {...props} useAutofocus={true}/>,
			},
			{
				title: "Login",
				field: "login",
				filtering: false,
				editComponent: FieldInput,
			},
			{
				title: "Password",
				field: "password",
				filtering: false,
				editComponent: PasswordInput,
			},
			{
				title: "Tag",
				field: "tag",
				lookup: tableLookup,
				editComponent: LookupAutocompleteInput,
			},
		],
		data: tableData,
	});

	return <MaterialTable
		title="Accounts"
		columns={state.columns}
		data={state.data}
		icons={tableIcons}
		options={{
			draggable: false,
			filtering: true,
		}}
		editable={{
			onRowAdd: onTableRowAdd(setState),
			onRowUpdate: onTableRowUpdate(setState),
			onRowDelete: onTableRowDelete(setState),
		}}
	/>
}

export default DataTable;