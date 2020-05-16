import axios from "axios"

const URL = "http://esapp/public";

const server = {
    fetchPasswords(token) {
        return axios.get(`${URL}/accounts`, {
            params: {
                token,
            },
        })
            .then(res => res)
            .catch(error => error);
    },
    postPassword(obj) {
        return axios.post(`${URL}/accounts`, obj)
            .then(res => res)
            .catch(error => error);
    },
    deletePassword(id, token) {
        return axios.delete(`${URL}/accounts/${id}`, {
            data: {
                token,
            },
        })
            .then(res => res)
            .catch(error => error);
    },
    editPassword(id, data) {
        return axios.patch(`${URL}/accounts/${id}`, data)
            .then(res => res)
            .catch(error => error);
    },
    // Actually name is email but db receives "name" field
    performSignIn(token, name) {
        return axios.post(`${URL}/log`, {
            token,
            name,
        })
            .then(res => res)
            .catch(error => error);
    },
    performRegistration(token, salt) {
        return axios.post(`${URL}/log/salt`, {
            token,
            salt,
        })
            .then(res => res)
            .catch(error => error);
    },

}

export default server;
