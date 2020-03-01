import {passwordsAPI} from "../API/DAL_API";

const UPDATE_SEARCH_BAR_TEXT = "UPDATE_SEARCH_BAR_TEXT";
const APPLY_SEARCH_QUERRY = "APPLY_SEARCH_QUERRY";
const APPLY_TAG_ON_SELECTION = "APPLY_TAG_ON_SELECTION";
const SET_FAKE_DATA = "SET_FAKE_DATA";

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
	],
	filteredTableEntries: [],
	fakeData: [],
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
		case APPLY_SEARCH_QUERRY:
			return ({
				...state,
				filteredTableEntries: [...action.filteredEntries]
			});
		case APPLY_TAG_ON_SELECTION:
			return ({
				...state,
				filteredTableEntries: [...action.filteredEntries]
			});
		case SET_FAKE_DATA:
			return ({
				...state,
				fakeData: [...action.fakeData]
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
export let applySearchQuerry = (filteredEntries) => {
	return ({
		type: APPLY_SEARCH_QUERRY,
		filteredEntries
	});
};
export let applyTag = (filteredEntries) => {
	return ({
		type: APPLY_TAG_ON_SELECTION,
		filteredEntries
	});
};
export let setFakeData = (fakeData) => {
	return ({
		type: SET_FAKE_DATA,
		fakeData
	});
};


export let getData = () => {
	return (dispatch) => {
		passwordsAPI.getPasswords().then(fakeData => {
			dispatch(setFakeData(fakeData.data));
		})
	}

};

export default contentReducer;