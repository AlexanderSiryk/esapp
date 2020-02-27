import {connect} from "react-redux";
import DataTable from "./DataTable";


let mapStateToProps = (state) => {
	return ({
		searchBarText: state.content.searchBarText,
		tableEntriesFiltered: state.content.filteredTableEntries
	});
};

let mapDispatchToProps = () => {
	return ({

	});
};

let DataTableContainer = connect(mapStateToProps, mapDispatchToProps)(DataTable);

export default DataTableContainer;