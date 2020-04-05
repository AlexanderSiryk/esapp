import {server} from "../API/DAL_API";
import {setTableEntries} from "./contentReducer";

const SET_IS_SIGNED_IN = "SET_IS_SIGNED_IN";
const SET_USER_DATA = "SET_USER_DATA";
const SET_IS_DECRYPTED = "SET_IS_DECRYPTED";
const RESET_LAYERS = "RESET_LAYERS";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const SET_KEY = "SET_KEY";

const initialState = {
	isDecrypted: false,		// False in production
	isSignedIn: true,		// False in production
	isFetching: true,		// True in production
	userEmail: null,
	userLogin: null,
	userToken: null,
	userImageURL: null,
	key: null,
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
		case SET_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching,
			}
		case SET_KEY:
			return {
				...state,
				key: action.key,
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
export const setIsFetching = (isFetching) => ({
	type: SET_IS_FETCHING,
	isFetching,
});
export const setKey = (key) => ({
	type: SET_KEY,
	key,
});
// TODO add on error exception
export const fetchEntries = () => (dispatch) => {
	server.fetchPasswords().then((response) => {
		dispatch(setIsFetching(false));
		dispatch(setTableEntries(response.data));
	});
}
export const postEntry = (encryptedEntry) => () => {
	server.postPassword(encryptedEntry).then(r => console.log(r));
}

export default layersReducer;