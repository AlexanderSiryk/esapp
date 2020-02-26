let initialState = {
	items: [
		{
			name: "Content",
			link: "content"
		},
		{
			name: "Tags",
			link: "tags"
		},
		{
			name: "Preferences",
			link: "preferences"
		},
	]
};

let sidebarReducer = (state = initialState, action) => {
	return state;
};

export default sidebarReducer;