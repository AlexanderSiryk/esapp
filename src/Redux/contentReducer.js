const UPDATE_SEARCH_BAR_TEXT = "UPDATE_SEARCH_BAR_TEXT";
const UPDATE_FILTERED_TABLE_ENTRIES = "UPDATE_FILTERED_TABLE_ENTRIES";

let initialState = {
	searchBarText: "",
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
			name: "twitch",
			login: "login3",
			password: "password3",
			tag: "tag3",
		},
		{
			id: 4,
			name: "twitter",
			login: "login3",
			password: "password3",
			tag: "tag3",
		},
		{
			id: 5,
			name: "instagram",
			login: "login3",
			password: "password3",
			tag: "tag3",
		},
		{
			id: 6,
			name: "aliexpress",
			login: "login3",
			password: "password3",
			tag: "tag3",
		},
		{
			id: 7,
			name: "alibaba",
			login: "login3",
			password: "password3",
			tag: "tag3",
		},
	],
	filteredTableEntries: [],
};

(function () {
	initialState.filteredTableEntries = [...initialState.tableEntries];
})();

let contentReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_SEARCH_BAR_TEXT:
			return ({
				...state,
				searchBarText: action.searchBarText,
			});
		case UPDATE_FILTERED_TABLE_ENTRIES:
			return ({
				...state,
				filteredTableEntries: [...action.filteredEntries]
			});
		default:
			return state;
	}
};

export let updateSearchBarText = (searchBarText) => {
	return ({
		type: "UPDATE_SEARCH_BAR_TEXT",
		searchBarText
	});
};

export let updateFilteredEntries = (filteredEntries) => {
	return ({
		type: "UPDATE_FILTERED_TABLE_ENTRIES",
		filteredEntries
	});
};

export default contentReducer;