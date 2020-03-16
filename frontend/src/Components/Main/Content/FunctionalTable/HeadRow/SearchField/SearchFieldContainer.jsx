import {connect} from "react-redux";
import SearchField from "./SearchField";
import {clearTag, updateSearchBarText} from "../../../../../../Redux/contentReducer";
import {getSearchBarText, getTagSelected} from "../../../../../../Redux/Selectors/contentSelectors";

let mapStateToProps = (state) => ({
	searchBarText: getSearchBarText(state),
	tagSelected: getTagSelected(state),
});

let SearchFieldContainer = connect(mapStateToProps, {
	updateSearchBarText,
	clearTag,
})(SearchField);

export default SearchFieldContainer;