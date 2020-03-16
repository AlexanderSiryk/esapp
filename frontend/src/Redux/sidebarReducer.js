const SET_IS_PROFILE_ACTIONS_MODAL_SHOWN = "SET_IS_PROFILE_ACTIONS_MODAL_SHOWN";
const RESET_SIDEBAR = "RESET_SIDEBAR";

let initialState = {
	isProfileActionsModalShown: false,
	items: [
		{
			name: "Content",
			link: "content"
		},
		{
			name: "Tags",
			link: "tags"
		},
		{
			name: "Preferences",
			link: "preferences"
		},
	]
};

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
			return null;
		default:
			return state;
	}
};

// PAM - ProfileActionsModal
export let setIsPAMShown = (isShown) => ({
	type: SET_IS_PROFILE_ACTIONS_MODAL_SHOWN,
	isShown,
});
export let resetSidebar = () => ({
	type: RESET_SIDEBAR,
});

export default sidebarReducer;