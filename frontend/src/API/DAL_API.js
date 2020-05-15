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
            }).catch(error => {
                console.dir(error)
                return error
            });
    },
    postPassword(obj) {
        return axios.post(URL, obj)
            .then(res => {
                console.log("-========-");
                console.log("post:");
                console.dir(res);
                console.log("-========-");
                return res;
            }).catch(error => {
                console.dir(error)
                return error
            });
    },
    deletePassword(id) {
        return axios.delete(URL + `/${id}`, {data: id})
            .then(res => {
                console.log("-========-");
                console.log("delete:");
                console.dir(res);
                console.log("-========-");
                return res;
            }).catch(error => {
                console.dir(error)
                return error
            });
    },
    editPassword(id, data) {
        return axios.patch(URL + `/${id}`, data)
            .then(res => {
                console.log("-========-");
                console.log("edit:");
                console.dir(res);
                console.log("-========-");
                return res;
            }).catch(error => {
                console.dir(error)
                return error
            })
    },
}

export default server;
