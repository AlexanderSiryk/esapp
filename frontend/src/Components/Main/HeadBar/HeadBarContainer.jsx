import {connect} from "react-redux";
import {toggleSidebar} from "../../../Redux/sidebarReducer";
import HeadBar from "./HeadBar";
import {getUserImageURL, getUserLogin} from "../../../Redux/Selectors/layersSelectors";

let mapStateToProps = (state) => ({
	userImageURL: getUserImageURL(state),
	userLogin: getUserLogin(state),
});

let HeadBarContainer = connect(mapStateToProps, {
	toggleSidebar,
})(HeadBar);

export default HeadBarContainer;