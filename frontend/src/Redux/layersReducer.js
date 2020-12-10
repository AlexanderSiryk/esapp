import server from "../API/DAL_API";

const SET_IS_SIGNED_IN = "SET_IS_SIGNED_IN";
const SET_USER_DATA = "SET_USER_DATA";
const SET_IS_DECRYPTED = "SET_IS_DECRYPTED";
const RESET_LAYERS = "RESET_LAYERS";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const SET_KEY = "SET_KEY";
const SET_FETCH_ERROR = "SET_FETCH_ERROR";
const SET_IS_FIRST_SIGN_IN = "SET_IS_FIRST_SIGN_IN";
const SET_TABLE_ENTRIES = "SET_TABLE_ENTRIES";
const TOGGLE_GETTING_KEY_MODAL = "TOGGLE_GETTING_KEY_MODAL";
const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";
const SET_DELETED_TABLE_ENTRIES = "SET_DELETED_TABLE_ENTRIES";
const REMOVE_DELETED_TABLE_ENTRY = "REMOVE_DELETED_TABLE_ENTRY";
const RESTORE_DELETED_TABLE_ENTRY = "RESTORE_DELETED_TABLE_ENTRY";
const ADD_TO_DELETED_ENTRIES = "ADD_TO_DELETED_ENTRIES";
const SET_ALL_ENTRIES = "SET_ALL_ENTRIES";
const ADD_TABLE_ENTRY = "ADD_TABLE_ENTRY";
const UPDATE_TABLE_ENTRY = "UPDATE_TABLE_ENTRY";
const DELETE_TABLE_ENTRY = "DELETE_TABLE_ENTRY";

const initialState = {
    tableEntries: null,
    deletedTableEntries: null,
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
};

let layersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TABLE_ENTRY:
            return {
                ...state,
                tableEntries: [action.entry, ...state.tableEntries],
            };
        case UPDATE_TABLE_ENTRY:
            const uEntries = state.tableEntries.map(item => {
                if (item.id === action.entry.id) {
                    return action.entry;
                }

                return item;
            });
            return {
                ...state,
                tableEntries: uEntries,
            };
        case DELETE_TABLE_ENTRY:
            let deletedItem;
            const dEntries = state.tableEntries.filter(item => {
                if (item.id === action.id) {
                    deletedItem = item;
                }

                return item.id !== action.id;
            });
            return deletedItem
                ? {
                    ...state,
                    tableEntries: dEntries,
                    deletedTableEntries: [deletedItem, ...state.deletedTableEntries],
                }
                : {
                    ...state,
                    tableEntries: dEntries,
                };
        case ADD_TO_DELETED_ENTRIES:
            return {
                ...state,
                deletedTableEntries: [action.entry, ...state.deletedTableEntries],
            };
        case RESTORE_DELETED_TABLE_ENTRY:
            let newEntries = state.deletedTableEntries.filter(entry => {
                return entry.id !== action.entry.id;
            });
            return {
                ...state,
                tableEntries: [action.entry, ...state.tableEntries],
                deletedTableEntries: newEntries,
            };
        case REMOVE_DELETED_TABLE_ENTRY:
            let newEntries2 = state.deletedTableEntries.filter(entry => entry.id !== action.id);
            return {
                ...state,
                deletedTableEntries: newEntries2,
            };
        case SET_ALL_ENTRIES:
            return {
                ...state,
                tableEntries: action.tableEntries,
                deletedTableEntries: action.deletedTableEntries,
            };
        case SET_DELETED_TABLE_ENTRIES:
            return {
                ...state,
                deletedTableEntries: action.deletedTableEntries,
            };
        case SET_TABLE_ENTRIES:
            return {
                ...state,
                tableEntries: action.tableEntries,
            };
        case TOGGLE_GETTING_KEY_MODAL:
            return {
                ...state,
                getKeyWindowShown: !state.getKeyWindowShown,
            };
        case SET_IS_SIGNED_IN:
            return {
                ...state,
                isSignedIn: action.isSignedIn,
            };
        case SET_USER_DATA:
            return {
                ...state,
                userEmail: action.data.email,
                userLogin: action.data.login,
                userToken: action.data.token,
                userImageURL: action.data.image,
            };
        case SET_IS_DECRYPTED:
            return {
                ...state,
                isDecrypted: action.isDecrypted,
            };
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            };
        case SET_KEY:
            return {
                ...state,
                key: action.key,
            };
        case SET_FETCH_ERROR:
            return {
                ...state,
                fetchError: true,
            };
        case SET_IS_FIRST_SIGN_IN:
            return {
                ...state,
                firstSignIn: action.isFirstSignIn,
            };
        case TOGGLE_SIDEBAR:
            return {
                ...state,
                isSidebarShown: !state.isSidebarShown,
            };
        case RESET_LAYERS:
            return {...initialState};
        default:
            return state;
    }
};

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
export const setTableEntries = (tableEntries) => ({
    type: SET_TABLE_ENTRIES,
    tableEntries,
});
export const addTableEntry = (entry) => ({
    type: ADD_TABLE_ENTRY,
    entry,
});
export const updateTableEntry = (entry) => ({
    type: UPDATE_TABLE_ENTRY,
    entry,
});
export const deleteTableEntry = (id) => ({
    type: DELETE_TABLE_ENTRY,
    id,
});
export const toggleKeyModal = () => ({
    type: TOGGLE_GETTING_KEY_MODAL,
});
export const toggleSidebar = () => ({
    type: TOGGLE_SIDEBAR,
});
export const setDeletedTableEntries = (deletedTableEntries) => ({
    type: SET_DELETED_TABLE_ENTRIES,
    deletedTableEntries,
});
export const removeDeletedEntry = (id) => ({
    type: REMOVE_DELETED_TABLE_ENTRY,
    id,
});
export const restoreDeletedEntry = (entry) => ({
    type: RESTORE_DELETED_TABLE_ENTRY,
    entry,
});
export const addToDeletedEntries = (entry) => ({
    type: ADD_TO_DELETED_ENTRIES,
    entry,
});
export const setAllEntries = (tableEntries, deletedTableEntries) => ({
    type: SET_ALL_ENTRIES,
    tableEntries,
    deletedTableEntries,
});

export const init = (token) => (dispatch) => {
    server.init(token)
        .then((response) => {
            dispatch(setIsFetching(false));
            if (!response.isAxiosError) {
                dispatch(setAllEntries(response.data.accounts, response.data.delAccounts));
            } else {
                dispatch(setFetchError());
            }
        });
};

export default layersReducer;
