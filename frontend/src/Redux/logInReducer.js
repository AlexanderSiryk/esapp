const SET_IS_SIGNED_IN = "SET_IS_SIGNED_IN";
const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
	isSignedIn: true,
	userMail: null,
	userLogin: null,
	userToken: null,
	userImage: null,
};

let logInReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_IS_SIGNED_IN:
			return ({
				...state,
				isSignedIn: action.isSignedIn,
			});
		case SET_USER_DATA:
			return ({
				...state,
			});
		default:
			return state;
	}
};

export let setIsSignedIn = (isSignedIn) => {
	return ({
		type: SET_IS_SIGNED_IN,
		isSignedIn,
	});
};

export let setUserData = (data) => {
	return ({
		type: SET_USER_DATA,
		data,
	});
};

export default logInReducer;