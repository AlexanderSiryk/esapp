import {connect} from "react-redux";
import {toggleAddWindow} from "../../../../../Redux/contentReducer";
import HeadRow from "./HeadRow";

let mapStateToProps = () => {
	return ({

	});
};

let HeadRowContainer = connect(mapStateToProps, {
	toggleAddWindow
})(HeadRow);

export default HeadRowContainer;