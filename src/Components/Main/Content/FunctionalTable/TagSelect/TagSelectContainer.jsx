import {connect} from "react-redux";
import TagSelect from "./TagSelect";
import {applyTag} from "../../../../../Redux/contentReducer";


let mapStateToProps = (state) => {
	return ({
		tableEntries: state.content.tableEntries,
		filteredTableEntries: state.content.filteredTableEntries,
	});
};

let TagSelectContainer = connect(mapStateToProps, {
	applyTag,
})(TagSelect);

export default TagSelectContainer;