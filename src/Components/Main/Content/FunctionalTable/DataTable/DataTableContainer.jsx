import {connect} from "react-redux";
import DataTable from "./DataTable";


let mapStateToProps = (state) => {
	return ({
		tableEntries: state.content.tableEntries,
	});
};

let mapDispatchToProps = () => {
	return ({

	});
};

let DataTableContainer = connect(mapStateToProps, mapDispatchToProps)(DataTable);

export default DataTableContainer;