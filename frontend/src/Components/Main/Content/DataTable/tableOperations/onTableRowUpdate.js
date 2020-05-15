import updateColumnsLookup from "./updateColumnsLookup";
import server from "../../../../../API/DAL_API";
import {encryptEntry} from "../../../../../API/encryptingOperations";

function onTableRowUpdate(setState, key, user_id) {
    return (newData, oldData) => new Promise(resolve => {
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
        let en = encryptEntry({...newData, user_id}, key);
        delete en.id;
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
    })
}

export default onTableRowUpdate;
