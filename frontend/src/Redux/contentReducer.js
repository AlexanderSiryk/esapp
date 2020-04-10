const UPDATE_SEARCH_BAR_TEXT = "UPDATE_SEARCH_BAR_TEXT";
const APPLY_TAG_ON_SELECTION = "APPLY_TAG_ON_SELECTION";
const ADD_ENTRY = "ADD_ENTRY";
const TOGGLE_ADD_WINDOW = "TOGGLE_ADD_WINDOW";
const CLEAR_TAG = "CLEAR_TAG";
const TOGGLE_EDIT_WINDOW = "TOGGLE_EDIT_WINDOW";
const SAVE_EDITED_ENTRY = "SAVE_EDITED_ENTRY";
const DELETE_ENTRY = "DELETE_ENTRY";
const CLEAR_SEARCH_FIELD = "CLEAR_SEARCH_FIELD";
const RESET_CONTENT = "RESET_CONTENT";
const SET_DECRYPTED_TABLE_ENTRIES = "SET_DECRYPTED_TABLE_ENTRIES";
const SET_TABLE_ENTRIES = "SET_TABLE_ENTRIES";
const TOGGLE_GETTING_KEY_MODAL = "const TOGGLE_GETTING_KEY_MODAL";

const initialState = {
	editingEntryId: null,
	searchBarText: "",
	tagSelected: "blank",
	tableEntries: null, 	//[{id: null, name: null, login: null, password: null, tag: null,}],
	addWindowShown: false,
	editWindowShown: false,
	getKeyWindowShown: false,
}

let contentReducer = (state = initialState, action) => {
	let id;
	let tableEntries;
	switch (action.type) {
		case UPDATE_SEARCH_BAR_TEXT:
			return {
				...state,
				searchBarText: action.searchBarText,
			}
		case APPLY_TAG_ON_SELECTION:
			return {
				...state,
				tagSelected: action.tagSelected,
			}
		case ADD_ENTRY:
			id = state.tableEntries.length;
			id++;
			let entry = {
				id: id,
				name: action.entry.name,
				login: action.entry.login,
				password: action.entry.password,
				tag: action.entry.tag,
			};
			return {
				...state,
				lastPostId: id,
				tableEntries: [...state.tableEntries, entry],
			}
		case TOGGLE_ADD_WINDOW:
			return {
				...state,
				addWindowShown: !state.addWindowShown,
			}
		case CLEAR_TAG:
			return {
				...state,
				tagSelected: "blank",
			}
		case TOGGLE_EDIT_WINDOW:
			return {
				...state,
				editWindowShown: !state.editWindowShown,
				editingEntryId: action.editingEntryId,
			}
		case SAVE_EDITED_ENTRY:
			id = action.entry.id - 1;
			if (JSON.stringify(action.entry) !== JSON.stringify(state.tableEntries[id])) {
				tableEntries = [...state.tableEntries];
				tableEntries[action.entry.id - 1] = action.entry;
			} else {
				tableEntries = state.tableEntries;
			}
			return {
				...state,
				tableEntries,
			}
		case DELETE_ENTRY:
			tableEntries = [...state.tableEntries];
			id = tableEntries.length - 1;
			for (let i = action.id - 1; i < id; i++) {
				tableEntries[i] = tableEntries[i + 1];
				tableEntries[i].id = i + 1;
			}
			tableEntries.pop();
			return {
				...state,
				tableEntries,
			}
		case CLEAR_SEARCH_FIELD:
			return {
				...state,
				searchBarText: "",
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

export const updateSearchBarText = (searchBarText) => ({
	type: UPDATE_SEARCH_BAR_TEXT,
	searchBarText,
});
export const applyTag = (tagSelected) => ({
	type: APPLY_TAG_ON_SELECTION,
	tagSelected,
});
export const addEntry = (entry) => ({
	type: ADD_ENTRY,
	entry,
});
export const toggleAddWindow = () => ({
	type: TOGGLE_ADD_WINDOW,
});
export const toggleEditWindow = (editingEntryId) => ({
	type: TOGGLE_EDIT_WINDOW,
	editingEntryId,
});
export const clearTag = () => ({
	type: CLEAR_TAG,
});
export const saveEditedEntry = (entry) => ({
	type: SAVE_EDITED_ENTRY,
	entry,
});
export const deleteEntry = (id) => ({
	type: DELETE_ENTRY,
	id,
});
export const clearSearchField = () => ({
	type: CLEAR_SEARCH_FIELD,
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