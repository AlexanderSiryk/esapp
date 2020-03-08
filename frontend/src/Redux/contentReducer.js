const UPDATE_SEARCH_BAR_TEXT = "UPDATE_SEARCH_BAR_TEXT";
const APPLY_TAG_ON_SELECTION = "APPLY_TAG_ON_SELECTION";
const ADD_ENTRY = "ADD_ENTRY";
const TOGGLE_ADD_WINDOW = "TOGGLE_ADD_WINDOW";
const CLEAR_TAG = "CLEAR_TAG";
const TOGGLE_EDIT_WINDOW = "TOGGLE_EDIT_WINDOW";
const SAVE_EDITED_ENTRY = "SAVE_EDITED_ENTRY";

let initialState = {
	editingEntryId: 0,
	lastEntryId: 7,
	searchBarText: "",
	tagSelected: "blank",
	tableEntries: [
		{
			id: 1,
			name: "google",
			login: "login1",
			password: "password1",
			tag: "tag1",
		},
		{
			id: 2,
			name: "amazon",
			login: "login2",
			password: "password2",
			tag: "tag2",
		},
		{
			id: 3,
			name: "Twitch",
			login: "login3",
			password: "password3",
			tag: "tag3",
		},
		{
			id: 4,
			name: "twitter",
			login: "login4",
			password: "password4",
			tag: "tag3",
		},
		{
			id: 5,
			name: "instagram",
			login: "login5",
			password: "password5",
			tag: "tag5",
		},
		{
			id: 6,
			name: "aliexpress",
			login: "login6",
			password: "password6",
			tag: "tag3",
		},
		{
			id: 7,
			name: "alibaba",
			login: "login7",
			password: "password7",
			tag: "tag3",
		},
	],
	addWindowShown: false,
	editWindowShown: false,
};

let contentReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_SEARCH_BAR_TEXT:
			return ({
				...state,
				searchBarText: action.searchBarText,
			});
		case APPLY_TAG_ON_SELECTION:
			return ({
				...state,
				tagSelected: action.tagSelected,
			});
		case ADD_ENTRY:
			let id = ++state.lastEntryId;
			let entry = {
				id: id,
				name: action.entry.name,
				login: action.entry.login,
				password: action.entry.password,
				tag: action.entry.tag,
			};
			return ({
				...state,
				lastPostId: id,
				tableEntries: [...state.tableEntries, entry],
			});
		case TOGGLE_ADD_WINDOW:
			return ({
				...state,
				addWindowShown: !state.addWindowShown,
			});
		case CLEAR_TAG:
			return ({
				...state,
				tagSelected: "blank",
			});
		case TOGGLE_EDIT_WINDOW:
			return ({
				...state,
				editWindowShown: !state.editWindowShown,
				editingEntryId: action.editingEntryId,
			});
		case SAVE_EDITED_ENTRY:
			let tableEntries;
			let entryId = action.entry.id - 1;
			if (JSON.stringify(action.entry) !== JSON.stringify(state.tableEntries[entryId])) {
				tableEntries = [...state.tableEntries];
				tableEntries[action.entry.id - 1] = action.entry;
			} else {
				tableEntries = state.tableEntries;
			}
			return ({
				...state,
				tableEntries,
			});

		default:
			return state;
	}
};

export let updateSearchBarText = (searchBarText) => {
	return ({
		type: UPDATE_SEARCH_BAR_TEXT,
		searchBarText,
	});
};
export let applyTag = (tagSelected) => {
	return ({
		type: APPLY_TAG_ON_SELECTION,
		tagSelected,
	});
};
export let addEntry = (entry) => {
	return ({
		type: ADD_ENTRY,
		entry,
	});
};
export let toggleAddWindow = () => {
	return ({
		type: TOGGLE_ADD_WINDOW,
	});
};
export let toggleEditWindow = (editingEntryId) => {
	return ({
		type: TOGGLE_EDIT_WINDOW,
		editingEntryId,
	});
};
export let clearTag = () => {
	return ({
		type: CLEAR_TAG,
	});
};
export let saveEditedEntry = (entry) => {
	return ({
		type: SAVE_EDITED_ENTRY,
		entry,
	});
};

export default contentReducer;