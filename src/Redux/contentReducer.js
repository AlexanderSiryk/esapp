const UPDATE_SEARCH_BAR_TEXT = "UPDATE_SEARCH_BAR_TEXT";
const APPLY_TAG_ON_SELECTION = "APPLY_TAG_ON_SELECTION";

let initialState = {
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
			login: "login3",
			password: "password3",
			tag: "tag3",
		},
		{
			id: 5,
			name: "instagram",
			login: "login3",
			password: "password3",
			tag: "tag5",
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
	]
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
				tagSelected: action.tagSelected
			});
		default:
			return state;
	}
};

export let updateSearchBarText = (searchBarText) => {
	return ({
		type: UPDATE_SEARCH_BAR_TEXT,
		searchBarText
	});
};
export let applyTag = (tagSelected) => {
	return ({
		type: APPLY_TAG_ON_SELECTION,
		tagSelected
	});
};

export default contentReducer;