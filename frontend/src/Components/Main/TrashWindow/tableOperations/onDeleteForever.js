import server from "../../../../API/DAL_API";

export default function onDeleteForever(setIsFetching, remove, userToken, event, rowData) {
    setIsFetching(true);
    server.deleteForever(rowData.id, userToken)
        .then(res => {
            setIsFetching(false);
            if (res.data.Error) {
                return console.log(res.data.Error);
            }
            remove(rowData.id);
        })
        .catch(console.error);
}
