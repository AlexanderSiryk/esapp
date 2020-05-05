import axios from "axios"

function getCookie(name) {
	let value = "; " + document.cookie;
	let parts = value.split("; " + name + "=");
	if (parts.length === 2) return parts.pop().split(";").shift();
}

const URL = "http://localhost/public/accounts";
const server = {
	fetchPasswords() {
		return axios.get(URL).catch(() => {
			return null;
		}).then(response => {
			return response;
		});
	},
	postPassword(obj) {
		axios({
			method: 'put',
			url: URL,
			data: obj,
			headers: {
				'X-CSRF-TOKEN': getCookie("XSRF-TOKEN"),
			},
		});
		return 0;
	},
}

export default server;