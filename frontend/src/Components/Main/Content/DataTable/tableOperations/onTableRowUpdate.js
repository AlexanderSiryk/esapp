import updateColumnsLookup from "./updateColumnsLookup";
import server from "../../../../../API/DAL_API";
import {encryptEntry} from "../../../../../API/encryptingOperations";

function onTableRowUpdate(setState, key, token, validationError) {
    return (newData, oldData) => {
        if (!key || key.length !== 64) throw new Error("Key is undefined");
        if (!token) throw new Error("Token is undefined");
        return new Promise((resolve, reject) => {
            if (validationError) {
                reject();
                return;
            }
            let objectsAreEqual = true;
            for (const prop in newData) {
                if (newData.hasOwnProperty(prop) &&
                    oldData.hasOwnProperty(prop)) {
                    if (newData[prop] !== oldData[prop]) {
                        objectsAreEqual = false;
                    }
                }
            }
            if (objectsAreEqual) {
                resolve();
                return;
            }
            let en = encryptEntry(newData, key);
            delete en.id;
            en.token = token;
            server.editPassword(oldData.id, en)
                .then(res => {
                    if (res.isAxiosError === false) {
                        resolve();
                    } else {
                        setState((prevState) => {
                            let columns = updateColumnsLookup(prevState, newData, oldData);
                            const data = [...prevState.data];
                            data[data.indexOf(oldData)] = newData;
                            return {...prevState, data, columns};
                        });
                        resolve();
                    }
                });
        });
    }
}

export default onTableRowUpdate;
