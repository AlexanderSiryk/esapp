import {connect} from "react-redux";
import ProfileActionsModal from "./ProfileActionsModal";
import {setIsPAMShown} from "../../../../Redux/sidebarReducer";

let mapStateToProps = (state, props) => ({
	image: props.image,
	login: props.login,
	email: props.email,
	isProfileActionsModalShown: props.isProfileActionsModalShown,
});

let ProfileActionsModalContainer = connect(mapStateToProps, {
	setIsPAMShown,
})(ProfileActionsModal);

export default ProfileActionsModalContainer;