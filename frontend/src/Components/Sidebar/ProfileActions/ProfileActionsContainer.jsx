import {connect} from "react-redux";
import ProfileActions from "./ProfileActions";
import {setIsPAMShown} from "../../../Redux/sidebarReducer";
import {getUserEmail, getUserImageURL, getUserLogin} from "../../../Redux/Selectors/layersSelectors";
import {getIsProfileActionsModalShown} from "../../../Redux/Selectors/sidebarSelectors";

let mapStateToProps = (state) => ({
	image: getUserImageURL(state),
	login: getUserLogin(state),
	email: getUserEmail(state),
	isProfileActionsModalShown: getIsProfileActionsModalShown(state),
});

let ProfileActionsContainer = connect(mapStateToProps, {
	setIsPAMShown
})(ProfileActions);

export default ProfileActionsContainer;