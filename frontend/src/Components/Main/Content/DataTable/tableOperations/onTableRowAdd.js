import updateColumnsLookup from "./updateColumnsLookup";
import server from "../../../../../API/DAL_API";
import {encryptEntry} from "../../../../../API/encryptingOperations";

function onTableRowAdd(addEntry, setState, key, token, validationError) {
    return newData => {
        if (!key || key.length !== 64) throw new Error("Key is undefined");
        if (!token) throw new Error("Token is undefined");
        return new Promise((resolve, reject) => {
            if (validationError) {
                reject();
                return;
            }
            let en = encryptEntry(newData, key);
            en.token = token;
            server.postPassword(en).then(res => {
                if (res.isAxiosError) {
                    resolve();
                } else {
                    const id = res.data.id;
                    addEntry({...newData, id});
                    setState(prevState => {
                        const columns = updateColumnsLookup(prevState, newData, null);
                        const data = [...prevState.data];
                        const id = res.data.id;
                        data.push({...newData, id});
                        return {...prevState, data, columns};
                    });
                    resolve();
                }
            })
            resolve();
        });
    };
}

export default onTableRowAdd;
