import updateColumnsLookup from "./updateColumnsLookup";
import server from "../../../../../API/DAL_API";
import {encryptEntry} from "../../../../../API/encryptingOperations";

function onTableRowAdd(setState, key, user_id, id) {
    return newData => new Promise(resolve => {
        let en = encryptEntry(newData, key);
        en.user_id = user_id;
        server.postPassword(en)
            .then(res => {
                if (res.isAxiosError) {
                    resolve();
                } else {
                    setState((prevState) => {
                        const columns = updateColumnsLookup(prevState, newData, null);
                        const data = [...prevState.data];
                        data.push({...newData, id});
                        return {...prevState, data, columns};
                    });
                    resolve();
                }
            })
    })
}

export default onTableRowAdd;
