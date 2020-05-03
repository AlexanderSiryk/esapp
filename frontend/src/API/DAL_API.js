import axios from "axios"

const URL = "http://localhost/public/accounts";
const server = {
	/*fetchPasswords() {
		return new Promise((resolve) => {
			resolve({
				data: [
					{
						id: 1,
						name: "240daddc0abd",
						login: "2f0da5d208e9",
						password: "3303b1c811b786d506",
						tag: "3703a58a"
					},
					{
						id: 2,
						name: "220fa3c109b6",
						login: "2f0da5d208ea",
						password: "3303b1c811b786d505",
						tag: "3703a589"
					},
					{
						id: 3,
						name: "1715abcf05b0",
						login: "2f0da5d208eb",
						password: "3303b1c811b786d504",
						tag: "3703a588"
					},
					{
						id: 4,
						name: "3715abcf12bd86",
						login: "2f0da5d208ec",
						password: "3303b1c811b786d503",
						tag: "3703a588"
					},
					{
						id: 5,
						name: "2a0cb1cf07bf86d05a",
						login: "2f0da5d208ed",
						password: "3303b1c811b786d502",
						tag: "3703a58e"
					},
					{
						id: 6,
						name: "220eabde1ea886d4448f",
						login: "2f0da5d208ee",
						password: "3303b1c811b786d501",
						tag: "3703a588"
					},
					{
						id: 7,
						name: "220eabd907ba95",
						login: "2f0da5d208ef",
						password: "3303b1c811b786d500",
						tag: "3703a588"
					}
				]
			});
		})
			.then(response => {
				return response;
			})
	},*/
	fetchPasswords() {
		return axios.get(URL).catch(() => {
			return null;
		}).then(response => {
			return response;
		});
	},
	postPassword(obj) {
		/*return axios.put(URL, obj);*/
		axios({
			method: 'put',
			url: URL,
			data: {
				id: 10,
				name: "test",
				login: "test",
				password: "test",
				tag: "test",
			},
		});
		return 0;
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

export default server;