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

let sidebarReducer = (state = initialState) => {
	return state;
};

export default sidebarReducer;