import {connect} from "react-redux";
import {toggleSidebar} from "../../../Redux/sidebarReducer";
import HeadBar from "./HeadBar";
import {getUserEmail, getUserImageURL, getUserLogin} from "../../../Redux/Selectors/layersSelectors";
import {toggleKeyModal} from "../../../Redux/contentReducer";

let mapStateToProps = (state) => ({
	userImageURL: getUserImageURL(state),
	userEmail: getUserEmail(state),
	userLogin: getUserLogin(state),
});

let HeadBarContainer = connect(mapStateToProps, {
	toggleSidebar,
	toggleKeyModal,
})(HeadBar);

export default HeadBarContainer;