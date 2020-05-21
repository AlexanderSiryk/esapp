import updateColumnsLookup from "./updateColumnsLookup";
import server from "../../../../../API/DAL_API";

function onTableRowDelete(setState, token) {
    return (oldData) => {
        if (!token) throw new Error("Token is undefined");
        return new Promise(resolve => {
            server.deletePassword(oldData.id, token)
                .then(res => {
                    if (res.isAxiosError) {
                        resolve();
                    } else {
                        setState((prevState) => {
                            let columns = updateColumnsLookup(prevState, null, oldData);
                            const data = [...prevState.data];
                            data.splice(data.indexOf(oldData), 1);
                            return {...prevState, data, columns};
                        });
                        resolve();
                    }
                })
        });
    }
}

export default onTableRowDelete;
