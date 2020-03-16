import {connect} from "react-redux";
import SearchField from "./SearchField";
import {clearTag, updateSearchBarText} from "../../../../../../Redux/contentReducer";
import {getSearchBarText} from "../../../../../../Redux/Selectors/contentSelectors";

let mapStateToProps = (state) => {
	return ({
		searchBarText: getSearchBarText(state),
	});
};

let SearchFieldContainer = connect(mapStateToProps, {
	updateSearchBarText,
	clearTag,
})(SearchField);

export default SearchFieldContainer;