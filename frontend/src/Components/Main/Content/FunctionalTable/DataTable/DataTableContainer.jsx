import {connect} from "react-redux";
import DataTable from "./DataTable";
import React from "react";
import {getSortedTable} from "../../../../../Redux/Selectors/contentSelectors";
import {toggleEditWindow} from "../../../../../Redux/contentReducer";

class DataTableContainer extends React.Component {
	render() {
		return (
			<DataTable
				filteredTableEntries={this.props.filteredTableEntries}
				toggleEditWindow={this.props.toggleEditWindow}
			/>
		);
	}
}

let mapStateToProps = (state) => {
	return ({
		filteredTableEntries: getSortedTable(state),
	});
};

export default connect(mapStateToProps, {
	toggleEditWindow,
})(DataTableContainer);