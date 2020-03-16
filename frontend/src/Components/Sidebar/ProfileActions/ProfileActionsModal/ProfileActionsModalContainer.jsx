import {connect} from "react-redux";
import ProfileActionsModal from "./ProfileActionsModal";
import {setIsPAMShown} from "../../../../Redux/sidebarReducer";

let mapStateToProps = (state) => ({
	image: state.layers.userImageURL,
	login: state.layers.userLogin,
	email: state.layers.userEmail,
	isProfileActionsModalShown: state.sidebar.isProfileActionsModalShown,
});

let ProfileActionsModalContainer = connect(mapStateToProps, {
	setIsPAMShown,
})(ProfileActionsModal);

export default ProfileActionsModalContainer;