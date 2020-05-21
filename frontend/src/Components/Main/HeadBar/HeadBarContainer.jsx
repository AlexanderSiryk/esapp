import {connect} from "react-redux";
import HeadBar from "./HeadBar";
import {getUserEmail, getUserImageURL, getUserLogin} from "../../../Redux/Selectors/layersSelectors";
import {toggleSidebar} from "../../../Redux/layersReducer";

let mapStateToProps = (state) => ({
    userImageURL: getUserImageURL(state),
    userEmail: getUserEmail(state),
    userLogin: getUserLogin(state),
});

let HeadBarContainer = connect(mapStateToProps, {
    toggleSidebar,
})(HeadBar);

export default HeadBarContainer;
