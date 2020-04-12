const SET_IS_PROFILE_WINDOW_SHOWN = "SET_IS_PROFILE_WINDOW_SHOWN";
const RESET_SIDEBAR = "RESET_SIDEBAR";
const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";

const initialState = {
	isProfileWindowShown: false,
	isSidebarShown: false,
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
		case TOGGLE_SIDEBAR:
			return {
				...state,
				isSidebarShown: !state.isSidebarShown,
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
export const toggleSidebar = () => ({
	type: TOGGLE_SIDEBAR,
});

export default sidebarReducer;