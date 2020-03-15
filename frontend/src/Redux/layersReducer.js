const SET_IS_SIGNED_IN = "SET_IS_SIGNED_IN";
const SET_USER_DATA = "SET_USER_DATA";
const SET_IS_DECRYPTED = "SET_IS_DECRYPTED";

let initialState = {
	isDecrypted: true,
	isSignedIn: true,
	userMail: null,
	userLogin: null,
	userToken: null,
	userImageURL: null,
};

let layersReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_IS_SIGNED_IN:
			return ({
				...state,
				isSignedIn: action.isSignedIn,
			});
		case SET_USER_DATA:
			return ({
				...state,
				userMail: action.data.mail,
				userLogin: action.data.login,
				userToken: action.data.token,
				userImageURL: action.data.image,
			});
		case SET_IS_DECRYPTED:
			return ({
				...state,
				isDecrypted: action.isDecrypted,
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

export let setIsDecrypted = (isDecrypted) => {
	return ({
		type: SET_IS_DECRYPTED,
		isDecrypted,
	});
};

export default layersReducer;