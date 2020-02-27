import {connect} from "react-redux";
import SearchField from "./SearchField";
import {updateFilteredEntries, updateSearchBarText} from "../../../../../Redux/contentReducer";


let mapStateToProps = (state) => {
	return ({
		tableEntries: state.content.tableEntries,
		searchBarText: state.content.searchBarText,
	});
};

let SearchFieldContainer = connect(mapStateToProps, {
	updateSearchBarText,
	updateFilteredEntries
})(SearchField);

export default SearchFieldContainer;