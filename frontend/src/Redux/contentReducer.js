const TOGGLE_EDIT_WINDOW = "TOGGLE_EDIT_WINDOW";
const RESET_CONTENT = "RESET_CONTENT";
const SET_DECRYPTED_TABLE_ENTRIES = "SET_DECRYPTED_TABLE_ENTRIES";
const SET_TABLE_ENTRIES = "SET_TABLE_ENTRIES";
const TOGGLE_GETTING_KEY_MODAL = "const TOGGLE_GETTING_KEY_MODAL";

const initialState = {
    editingEntryId: null,
    searchBarText: "",
    tagSelected: "blank",
    tableEntries: null,
    addWindowShown: false,
    editWindowShown: false,
    getKeyWindowShown: false,
}

let contentReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_EDIT_WINDOW:
            return {
                ...state,
                editWindowShown: !state.editWindowShown,
                editingEntryId: action.editingEntryId,
            }
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

export const toggleEditWindow = (editingEntryId) => ({
    type: TOGGLE_EDIT_WINDOW,
    editingEntryId,
});
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
