import axios from "axios"

const URL = "http://esapp/public/accounts";

const server = {
    fetchPasswords(token) {
        return axios.get(URL, {
            params: {
                token,
            },
        }).then(res => {
            console.log("-========-");
            console.log("get:");
            console.dir(res);
            console.log("-========-");
            return res;
        }).catch(error => {
            console.dir(error)
            return error;
        });
    },
    postPassword(obj) {
        return axios.post(URL, obj)
            .then(res => {
                console.log("-========-");
                console.log("post an entry:");
                console.dir(res);
                console.log("-========-");
                return res;
            }).catch(error => {
                console.dir(error)
                return error;
            });
    },
    deletePassword(id, token) {
        return axios.delete(URL + `/${id}`, {
            data: {
                token,
            },
        }).then(res => {
            console.log("-========-");
            console.log("delete:");
            console.dir(res);
            console.log("-========-");
            return res;
        }).catch(error => {
            console.dir(error)
            return error;
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
                return error;
            })
    },
    performSignIn(token, name) { // Actually it is email but db receives "name" field
        return axios.post("http://esapp/public/log", {
            token,
            name,
        }).then(res => {
            console.log("-========-");
            console.log("post a token:");
            console.dir(res);
            console.log("-========-");
            return res;
        }).catch(error => {
            console.dir(error)
            return error;
        })
    },
    performRegistration(token, salt) {
        return axios.patch(`http://esapp/public/log/${token}`, {
            token,
            salt,
        }).then(res => {
            console.log("-========-");
            console.log("patch a salt:");
            console.dir(res);
            console.log("-========-");
            return res;
        }).catch(error => {
            console.dir(error)
            return error;
        })
    },

}

export default server;
