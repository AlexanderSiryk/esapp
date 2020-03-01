import {connect} from "react-redux";
import DataTable from "./DataTable";
import {getData} from "../../../../../Redux/contentReducer";
import React from "react";

class DataTableContainer extends React.Component {
	componentDidMount() {
		this.props.getData();
	}

	render() {
		return <DataTable
			searchBarText={this.props.searchBarText}
			filteredTableEntries={this.props.filteredTableEntries}
		/>
	}
}

let mapStateToProps = (state) => {
	return ({
		searchBarText: state.content.searchBarText,
		filteredTableEntries: state.content.filteredTableEntries
	});
};

export default connect(mapStateToProps, {
	getData
})(DataTableContainer);