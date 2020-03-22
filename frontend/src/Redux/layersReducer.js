import {gButtonOperations} from "../API/googleAPI";

const SET_IS_SIGNED_IN = "SET_IS_SIGNED_IN";
const SET_USER_DATA = "SET_USER_DATA";
const SET_IS_DECRYPTED = "SET_IS_DECRYPTED";
const RESET_LAYERS = "RESET_LAYERS";
const SET_IMAGE_KEY = "SET_IMAGE_KEY";
const FREE_UP_IMAGE_KEY = "FREE_UP_IMAGE_KEY";

const initialState = {
	isDecrypted: false,
	isSignedIn: false,
	userEmail: null,
	userLogin: null,
	userToken: null,
	userImageURL: null,
	imageKey: null,
}

let layersReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_IS_SIGNED_IN:
			return {
				...state,
				isSignedIn: action.isSignedIn,
			}
		case SET_USER_DATA:
			return {
				...state,
				userEmail: action.data.email,
				userLogin: action.data.login,
				userToken: action.data.token,
				userImageURL: action.data.image,
			}
		case SET_IS_DECRYPTED:
			return {
				...state,
				isDecrypted: action.isDecrypted,
			}
		case SET_IMAGE_KEY:
			return {
				...state,
				imageKey: action.image,
			}
		case FREE_UP_IMAGE_KEY:
			return {
				...state,
				imageKey: null,
			}
		case RESET_LAYERS:
			return {...initialState}
		default:
			return state;
	}
}

export const setIsSignedIn = (isSignedIn) => ({
	type: SET_IS_SIGNED_IN,
	isSignedIn,
});
export const setUserData = (data) => ({
	type: SET_USER_DATA,
	data,
});
export const setIsDecrypted = (isDecrypted) => ({
	type: SET_IS_DECRYPTED,
	isDecrypted,
});
export const resetLayers = () => ({
	type: RESET_LAYERS,
});
export const setImageKey = (image) => ({
	type: SET_IMAGE_KEY,
	image,
});
export const freeUpImageKey = () => ({
	type: FREE_UP_IMAGE_KEY
});

// TODO replace logIn by the promise
export let logIn = () => {
	return async (dispatch) => {
		const response = await gButtonOperations.logIn();
		dispatch(setIsSignedIn(response.isSignedIn));
		dispatch(setUserData(response.data))
	}
}

export default layersReducer;