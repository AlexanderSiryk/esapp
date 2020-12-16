import axios from "axios"

const URL = "http://esapp/public/api";

function getLocation() {
    return new Promise(resolve => {
        window.navigator.geolocation.getCurrentPosition(geolocation => {
            const lat = geolocation.coords.latitude;
            const lng = geolocation.coords.longitude;

            axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=4f629fce7fa14bce932b8300b27e353b`)
                .then(response => {
                    const date = new Date();
                    const comp = response.data.results[0].components;
                    resolve({
                        localtime: date.toISOString(),
                        location: `${comp.continent}, ${comp.country}, ${comp.city}, ${comp.borough}`,
                        lat,
                        lng,
                    });
                })
        }, () => {
            alert("You have to enable location")
        })
    });
}

const server = {
    init(token) {
        return axios.get(`${URL}/init`, {
            params: {
                token,
            },
        })
            .then(res => res)
            .catch(error => error);
    },
    fetchPasswords(token) {
        return axios.get(`${URL}/accounts`, {
            params: {
                token,
            },
        })
            .then(res => res)
            .catch(error => error);
    },
    fetchDeletedPasswords(token) {
        return axios.get(`${URL}/accounts/del`, {
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
    restoreEntry(id, token) {
        return axios.post(`${URL}/accounts/del/${id}`, {
            token,
        })
            .then(res => res)
            .catch(error => error);
    },
    deleteForever(id, token) {
        return axios.delete(`${URL}/accounts/del/${id}`, {
            data: {
                token,
            },
        })
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
    checkLastLocation(token, lat, lng) {
        return axios.post(`${URL}/log/checkLocation`, {
            token,
            lat,
            lng,
        })
            .then(res => res)
            .catch(error => error);
    }
}

export default server;
