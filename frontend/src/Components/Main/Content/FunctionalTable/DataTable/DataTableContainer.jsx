import {connect} from "react-redux";
import DataTable from "./DataTable";
import {getSortedTable} from "../../../../../Redux/Selectors/contentSelectors";
import {toggleEditWindow} from "../../../../../Redux/contentReducer";

let mapStateToProps = (state) => ({
	filteredTableEntries: getSortedTable(state),
});

let DataTableContainer = connect(mapStateToProps, {
	toggleEditWindow,
})(DataTable);

export default DataTableContainer;