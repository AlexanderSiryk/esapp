const RESET_CONTENT = "RESET_CONTENT";
const SET_DECRYPTED_TABLE_ENTRIES = "SET_DECRYPTED_TABLE_ENTRIES";
const SET_TABLE_ENTRIES = "SET_TABLE_ENTRIES";
const TOGGLE_GETTING_KEY_MODAL = "TOGGLE_GETTING_KEY_MODAL";

const initialState = {
    tableEntries: [{name: "a", login: "b", password: "c", tag: "d"}],
    getKeyWindowShown: false,
}

let contentReducer = (state = initialState, action) => {
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
        case RESET_CONTENT:
            return {...initialState}
        default:
            return state;
    }
}

export const resetContent = () => ({
    type: RESET_CONTENT,
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

export default contentReducer;
