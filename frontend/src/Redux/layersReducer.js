import server from "../API/DAL_API";

const SET_IS_SIGNED_IN = "SET_IS_SIGNED_IN";
const SET_USER_DATA = "SET_USER_DATA";
const SET_IS_DECRYPTED = "SET_IS_DECRYPTED";
const RESET_LAYERS = "RESET_LAYERS";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const SET_KEY = "SET_KEY";
const SET_FETCH_ERROR = "SET_FETCH_ERROR";
const SET_IS_FIRST_SIGN_IN = "SET_IS_FIRST_SIGN_IN";
const SET_DECRYPTED_TABLE_ENTRIES = "SET_DECRYPTED_TABLE_ENTRIES";
const SET_TABLE_ENTRIES = "SET_TABLE_ENTRIES";
const TOGGLE_GETTING_KEY_MODAL = "TOGGLE_GETTING_KEY_MODAL";
const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";

const initialState = {
    tableEntries: null,
    isDecrypted: false,
    isSignedIn: false,
    firstSignIn: true,
    isFetching: true,
    fetchError: false,
    getKeyWindowShown: false,
    userEmail: null,
    userLogin: null,
    userToken: null,
    userImageURL: null,
    key: null,
    salt: null,
    isSidebarShown: false,
}

let layersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TABLE_ENTRIES:
            return {
                ...state,
                tableEntries: action.tableEntries,
            }
        case SET_DECRYPTED_TABLE_ENTRIES:
            return {
                ...state,
                tableEntries: [...action.tableEntries],
            }
        case TOGGLE_GETTING_KEY_MODAL:
            return {
                ...state,
                getKeyWindowShown: !state.getKeyWindowShown,
            }
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
        case TOGGLE_SIDEBAR:
            return {
                ...state,
                isSidebarShown: !state.isSidebarShown,
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
export const setDecryptedTableEntries = (tableEntries) => ({
    type: SET_DECRYPTED_TABLE_ENTRIES,
    tableEntries,
});
export const setTableEntries = (tableEntries) => ({
    type: SET_TABLE_ENTRIES,
    tableEntries,
});
export const toggleKeyModal = () => ({
    type: TOGGLE_GETTING_KEY_MODAL,
});
export const toggleSidebar = () => ({
    type: TOGGLE_SIDEBAR,
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
