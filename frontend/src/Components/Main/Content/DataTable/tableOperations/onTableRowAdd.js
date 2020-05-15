import updateColumnsLookup from "./updateColumnsLookup";
import server from "../../../../../API/DAL_API";
import {encryptEntry} from "../../../../../API/encryptingOperations";

function onTableRowAdd(setState, key, user_id) {
    return newData => new Promise(resolve => {
        let en = encryptEntry({...newData, user_id}, key);
        server.postPassword(en)
            .then(res => {
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
    })
}

export default onTableRowAdd;
