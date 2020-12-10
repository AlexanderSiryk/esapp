import server from "../../../../API/DAL_API";

export default function onRestore(setIsFetching, restore, userToken, event, rowData) {
    setIsFetching(true);
    server.restoreEntry(rowData.id, userToken)
        .then(res => {
            setIsFetching(false);
            if (res.data.Error) {
                return console.log(res.data.Error);
            }
            restore({
                id: rowData.id,
                login: rowData.login,
                name: rowData.name,
                password: rowData.password,
                tag: rowData.tag,
            });
        })
        .catch(console.error);
}
