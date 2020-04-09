import {connect} from "react-redux";
import ProfileActions from "./ProfileActions";
import {setIsProfileWindowShown} from "../../../Redux/sidebarReducer";
import {getUserEmail, getUserImageURL, getUserLogin} from "../../../Redux/Selectors/layersSelectors";


let mapStateToProps = (state) => ({
	image: getUserImageURL(state),
	login: getUserLogin(state),
	email: getUserEmail(state),
});

let ProfileActionsContainer = connect(mapStateToProps, {
	setIsProfileWindowShown: setIsProfileWindowShown
})(ProfileActions);

export default ProfileActionsContainer;