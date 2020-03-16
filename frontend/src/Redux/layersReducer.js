import {gButtonOperations} from "../API/googleAPI";

const SET_IS_SIGNED_IN = "SET_IS_SIGNED_IN";
const SET_USER_DATA = "SET_USER_DATA";
const SET_IS_DECRYPTED = "SET_IS_DECRYPTED";
const RESET_LAYERS = "RESET_LAYERS"

let initialState = {
	isDecrypted: true,
	isSignedIn: true,
	userEmail: null,
	userLogin: null,
	userToken: null,
	userImageURL: null,
};

let layersReducer = (state = initialState, action) => {
	if (!state) {
		state = initialState;
	}
	switch (action.type) {
		case SET_IS_SIGNED_IN:
			return ({
				...state,
				isSignedIn: action.isSignedIn,
			});
		case SET_USER_DATA:
			return ({
				...state,
				userEmail: action.data.email,
				userLogin: action.data.login,
				userToken: action.data.token,
				userImageURL: action.data.image,
			});
		case SET_IS_DECRYPTED:
			return ({
				...state,
				isDecrypted: action.isDecrypted,
			});
		case RESET_LAYERS:
			return null;
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
export let resetLayers = () => ({
	type: RESET_LAYERS,
});

export let logIn = () => {
	return async (dispatch) => {
		const response = await gButtonOperations.logIn();
		dispatch(setIsSignedIn(response.isSignedIn));
		dispatch(setUserData(response.data))
	}
}

export let logOut = () => {
	return async (dispatch) => {
		const response = await gButtonOperations.logOut();
		dispatch(setIsSignedIn(response));
	}
}


export default layersReducer;