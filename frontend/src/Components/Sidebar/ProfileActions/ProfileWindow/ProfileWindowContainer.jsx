import {connect} from "react-redux";
import ProfileWindow from "./ProfileWindow";
import {setIsProfileWindowShown} from "../../../../Redux/sidebarReducer";
import {getUserEmail, getUserImageURL, getUserLogin} from "../../../../Redux/Selectors/layersSelectors";
import {getIsProfileWindowShown} from "../../../../Redux/Selectors/sidebarSelectors";

let mapStateToProps = (state) => ({
	image: getUserImageURL(state),
	login: getUserLogin(state),
	email: getUserEmail(state),
	isProfileWindowShown: getIsProfileWindowShown(state),
});

let ProfileWindowContainer = connect(mapStateToProps, {
	setIsProfileWindowShown: setIsProfileWindowShown,
})(ProfileWindow);

export default ProfileWindowContainer;