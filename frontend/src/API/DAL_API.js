import * as axios from "axios";

//const URL = "http://localhost/public/accounts";
const URL = "http://cor/app/backend/public/accounts";
export const server = {
	fetchPasswords() {
		return axios.get(URL).then(response => {
			return response;
		});
	},
	postPassword(obj) {
		return axios.put(URL, obj).then(() => 0);
		/*return axios.post(URL, {
			id: 10,
			name: "test",
			login: "test",
			password: "test",
			tag: "test",
		}).then(response => {
			return response;
		});*/
	},
}
