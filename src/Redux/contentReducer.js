let initialState = {
	tableEntries: [
		{
			id: 1,
			name: "name1",
			login: "login1",
			password: "password1",
			tag: "tag1",
		},
		{
			id: 2,
			name: "name2",
			login: "login2",
			password: "password2",
			tag: "tag2",
		},
		{
			id: 3,
			name: "name3",
			login: "login3",
			password: "password3",
			tag: "tag3",
		},
	],
};

let contentReducer = (state = initialState, action) => {
	return state;
};

export default contentReducer;