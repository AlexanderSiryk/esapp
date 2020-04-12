import {connect} from "react-redux";
import DataTable from "./DataTable";
import {
	getFilteredTable,
	getUniqueTags
} from "../../../../../Redux/Selectors/contentSelectors";
import {toggleEditWindow} from "../../../../../Redux/contentReducer";

let mapStateToProps = (state) => ({
	filteredTableEntries: getFilteredTable(state),
	tags: getUniqueTags(state),
});

let DataTableContainer = connect(mapStateToProps, {
	toggleEditWindow,
})(DataTable);

export default DataTableContainer;