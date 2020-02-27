import {connect} from "react-redux";
import TagSelect from "./TagSelect";


let mapStateToProps = (state) => {
	return ({
		tableEntries: state.content.tableEntries,
	});
};

let mapDispatchToProps = () => {
	return ({

	});
};

let TagSelectContainer = connect(mapStateToProps, mapDispatchToProps)(TagSelect);

export default TagSelectContainer;