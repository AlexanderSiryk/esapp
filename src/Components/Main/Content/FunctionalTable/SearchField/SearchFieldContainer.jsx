import {connect} from "react-redux";
import SearchField from "./SearchField";
import {applySearchQuerry, updateSearchBarText} from "../../../../../Redux/contentReducer";


let mapStateToProps = (state) => {
	return ({
		tableEntries: state.content.tableEntries,
		searchBarText: state.content.searchBarText,
	});
};

let SearchFieldContainer = connect(mapStateToProps, {
	updateSearchBarText,
	applySearchQuerry
})(SearchField);

export default SearchFieldContainer;