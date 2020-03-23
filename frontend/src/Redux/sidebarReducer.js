const SET_IS_PROFILE_ACTIONS_MODAL_SHOWN = "SET_IS_PROFILE_ACTIONS_MODAL_SHOWN";
const RESET_SIDEBAR = "RESET_SIDEBAR";

const initialState = {
	isProfileActionsModalShown: false,
}

let sidebarReducer = (state = initialState, action) => {
	if (!state) {
		state = initialState;
	}
	switch (action.type) {
		case SET_IS_PROFILE_ACTIONS_MODAL_SHOWN:
			return {
				...state,
				isProfileActionsModalShown: action.isShown,
			}
		case RESET_SIDEBAR:
			return {...initialState};
		default:
			return state;
	}
}

// PAM - ProfileActionsModal
export const setIsPAMShown = (isShown) => ({
	type: SET_IS_PROFILE_ACTIONS_MODAL_SHOWN,
	isShown,
});
export const resetSidebar = () => ({
	type: RESET_SIDEBAR,
});

export default sidebarReducer;