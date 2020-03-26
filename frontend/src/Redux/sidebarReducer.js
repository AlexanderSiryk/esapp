const SET_IS_PROFILE_WINDOW_SHOWN = "SET_IS_PROFILE_WINDOW_SHOWN";
const RESET_SIDEBAR = "RESET_SIDEBAR";

const initialState = {
	isProfileWindowShown: false,
}

let sidebarReducer = (state = initialState, action) => {
	if (!state) {
		state = initialState;
	}
	switch (action.type) {
		case SET_IS_PROFILE_WINDOW_SHOWN:
			return {
				...state,
				isProfileWindowShown: action.isProfileWindowShown,
			}
		case RESET_SIDEBAR:
			return {...initialState};
		default:
			return state;
	}
}

export const setIsProfileWindowShown = (isProfileWindowShown) => ({
	type: SET_IS_PROFILE_WINDOW_SHOWN,
	isProfileWindowShown,
});
export const resetSidebar = () => ({
	type: RESET_SIDEBAR,
});

export default sidebarReducer;