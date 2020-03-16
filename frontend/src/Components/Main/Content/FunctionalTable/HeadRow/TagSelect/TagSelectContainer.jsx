import {connect} from "react-redux";
import TagSelect from "./TagSelect";
import {applyTag} from "../../../../../../Redux/contentReducer";
import {getUniqueTags, getTagSelected} from "../../../../../../Redux/Selectors/contentSelectors";


let mapStateToProps = (state) => {
	return ({
		tagSelected: getTagSelected(state),
		uniqueTags: getUniqueTags(state),
	});
};

let TagSelectContainer = connect(mapStateToProps, {
	applyTag,
})(TagSelect);

export default TagSelectContainer;