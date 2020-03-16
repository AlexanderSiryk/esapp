import {connect} from "react-redux";
import ProfileActions from "./ProfileActions";
import {setIsPAMShown} from "../../../Redux/sidebarReducer";

let mapStateToProps = (state) => {
	return ({
		image: state.layers.userImageURL,
		login: state.layers.userLogin,
		email: state.layers.userEmail,
		isProfileActionsModalShown: state.sidebar.isProfileActionsModalShown,
	});
};

let ProfileActionsContainer = connect(mapStateToProps, {
	setIsPAMShown
})(ProfileActions);

export default ProfileActionsContainer;