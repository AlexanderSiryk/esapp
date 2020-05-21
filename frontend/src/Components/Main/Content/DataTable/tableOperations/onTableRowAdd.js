import updateColumnsLookup from "./updateColumnsLookup";
import server from "../../../../../API/DAL_API";
import {encryptEntry} from "../../../../../API/encryptingOperations";

function onTableRowAdd(setState, key, token) {
    if (!key || key.length !== 64) throw new Error("Key is undefined");
    if (!token) throw new Error("Token is undefined");
    return newData => new Promise(resolve => {
        let en = encryptEntry(newData, key);
        en.token = token;
        server.postPassword(en).then(res => {
            if (res.isAxiosError) {
                resolve();
            } else {
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
}

export default onTableRowAdd;
