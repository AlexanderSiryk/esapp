import {gButtonOperations} from "../API/googleAPI";

const SET_IS_SIGNED_IN = "SET_IS_SIGNED_IN";
const SET_USER_DATA = "SET_USER_DATA";
const SET_IS_DECRYPTED = "SET_IS_DECRYPTED";
const RESET_LAYERS = "RESET_LAYERS";
const SET_IMAGE_KEY = "SET_IMAGE_KEY";
const SET_KEY = "SET_KEY";
const FREE_UP_IMAGE_KEY = "FREE_UP_IMAGE_KEY";

// TODO send salt to the server

let initialState = {
	isDecrypted: false,
	isSignedIn: true,
	userEmail: null,
	userLogin: null,
	userToken: null,
	userImageURL: null,
	imageKey: null,
	key: null,
	salt: null,
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
		case SET_IMAGE_KEY:
			return ({
				...state,
				imageKey: action.image,
			});
		case SET_KEY:
			return ({
				...state,
				key: action.key,
			})
		case FREE_UP_IMAGE_KEY:
			return ({
				...state,
				imageKey: null,
			})
		case RESET_LAYERS:
			return null;
		default:
			return state;
	}
};

export let setIsSignedIn = (isSignedIn) => ({
	type: SET_IS_SIGNED_IN,
	isSignedIn,
});
export let setUserData = (data) => ({
	type: SET_USER_DATA,
	data,
});
export let setIsDecrypted = (isDecrypted) => ({
	type: SET_IS_DECRYPTED,
	isDecrypted,
});
export let resetLayers = () => ({
	type: RESET_LAYERS,
});
export let setImageKey = (image) => ({
	type: SET_IMAGE_KEY,
	image,
});
export let setKey = (key) => ({
	type: SET_KEY,
	key
});
export let freeUpImageKey = () => ({
	type: FREE_UP_IMAGE_KEY
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