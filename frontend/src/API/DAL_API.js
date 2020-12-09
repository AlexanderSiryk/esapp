import axios from "axios"

const URL = "http://esapp/public/api";

function getLocation() {
    return new Promise(resolve => {
        window.navigator.geolocation.getCurrentPosition(geolocation => {
            const lat = geolocation.coords.latitude;
            const lng = geolocation.coords.longitude;

            axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=4f629fce7fa14bce932b8300b27e353b`)
                .then(response => {
                    const localtime = response.data.timestamp.created_http;
                    const components = response.data.results[0].components;
                    resolve({
                        localtime,
                        location: `${components.continent}, ${components.country}, ${components.city}`,
                    });
                })
        }, () => {
            const date = new Date();
            resolve({
                timezone: "unknown",
                localtime: date.toGMTString() || "unknown",
                location: "unknown",
            });
        })
    });
}

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
    async performSignIn(token, name) {
        const location = await getLocation();

        return axios.post(`${URL}/log`, {
            token,
            name,
            location,
        })
            .then(res => res)
            .catch(error => error);
    },
    async performRegistration(token, salt) {
        return axios.post(`${URL}/log/salt`, {
            token,
            salt,
        })
            .then(res => res)
            .catch(error => error);
    },

}

export default server;
