import {connect} from "react-redux";
import SearchField from "./SearchField";
import {applySearchQuery, updateSearchBarText} from "../../../../../Redux/contentReducer";


let mapStateToProps = (state) => {
	return ({
		tableEntries: state.content.tableEntries,
		searchBarText: state.content.searchBarText,
	});
};

let SearchFieldContainer = connect(mapStateToProps, {
	updateSearchBarText,
	applySearchQuery
})(SearchField);

export default SearchFieldContainer;