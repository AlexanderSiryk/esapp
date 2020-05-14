import axios from "axios"

const URL = "http://esapp/public/accounts";

const server = {
	fetchPasswords() {
		return axios.get(URL)
            .then(res => {
                console.log("-========-");
                console.log("get:");
                console.dir(res);
                console.log("-========-");
                return res;
            })
            .catch(() => null);
	},
	postPassword(obj) {
        return axios.post(URL, obj).then(res => {
                console.log("-========-");
                console.log("post:");
                console.dir(res);
                console.log("-========-");
                return res;
            }).catch((error) => error);
	},
    deletePassword(id) {
        axios.delete(URL+`/${id}`, { data: id })
            .then(res => {
                console.log("-========-");
                console.log("delete:");
                console.die(res);
                console.log("-========-");
        });
    },
    editPasswords(id, data) {
        axios.patch(URL+`/${id}`, data)
            .then(res => {
                console.log("-========-");
                console.log("edit:");
                console.die(res);
                console.log("-========-");
        });
    }
}

export default server;
