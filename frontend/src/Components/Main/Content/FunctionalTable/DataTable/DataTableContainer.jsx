import {connect} from "react-redux";
import DataTable from "./DataTable";
import React from "react";
import {getSortedTable} from "../../../../../Redux/contentSelectors";

class DataTableContainer extends React.Component {
	render() {
		return (
			<DataTable
				filteredTableEntries={this.props.filteredTableEntries}
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

})(DataTableContainer);