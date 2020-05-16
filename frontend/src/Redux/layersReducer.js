import server from "../API/DAL_API";
import {setTableEntries} from "./contentReducer";

const SET_IS_SIGNED_IN = "SET_IS_SIGNED_IN";
const SET_USER_DATA = "SET_USER_DATA";
const SET_IS_DECRYPTED = "SET_IS_DECRYPTED";
const RESET_LAYERS = "RESET_LAYERS";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const SET_KEY = "SET_KEY";
const SET_FETCH_ERROR = "SET_FETCH_ERROR";
const SET_IS_FIRST_SIGN_IN = "SET_IS_FIRST_SIGN_IN";

const initialState = {
    isDecrypted: false,		// False
    isSignedIn: false,		// False
    isFetching: true,		// True
    firstSignIn: true,      // True
    fetchError: false,      // False
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
        case SET_FETCH_ERROR:
            return {
                ...state,
                fetchError: true,
            }
        case SET_IS_FIRST_SIGN_IN:
            return {
                ...state,
                firstSignIn: action.isFirstSignIn,
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
export const setFetchError = () => ({
    type: SET_FETCH_ERROR,
});
export const setIsFirstSignIn = (isFirstSignIn) => ({
    type: SET_IS_FIRST_SIGN_IN,
    isFirstSignIn,
});
export const fetchEntries = (token) => (dispatch) => {
    server.fetchPasswords(token)
        .then((response) => {
            dispatch(setIsFetching(false));
            if (!response.isAxiosError) {
                dispatch(setTableEntries(response.data));
            } else {
                dispatch(setFetchError());
            }
        });
}

export default layersReducer;
