import {connect} from "react-redux";
import SearchField from "./SearchField";
import {updateSearchBarText} from "../../../../../Redux/contentReducer";
import {getSearchBarText} from "../../../../../Redux/contentSelectors";

let mapStateToProps = (state) => {
	return ({
		searchBarText: getSearchBarText(state),
	});
};

let SearchFieldContainer = connect(mapStateToProps, {
	updateSearchBarText,
})(SearchField);

export default SearchFieldContainer;