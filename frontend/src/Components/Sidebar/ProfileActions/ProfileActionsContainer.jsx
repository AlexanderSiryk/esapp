import {connect} from "react-redux";
import ProfileActions from "./ProfileActions";

let mapStateToProps = (state) => {
	return ({
		image: state.layers.userImageURL,
		login: state.layers.userLogin,
		email: state.layers.userEmail,
	});
};

let ProfileActionsContainer = connect(mapStateToProps, {

})(ProfileActions);

export default ProfileActionsContainer;