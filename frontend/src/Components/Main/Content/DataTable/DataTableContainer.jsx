import {connect} from "react-redux";
import DataTable from "./DataTable";
import {
    getKey, getTableEntries,
    getUniqueTags, getUserToken
} from "../../../../Redux/Selectors/layersSelectors";

import {addTableEntry, updateTableEntry, deleteTableEntry} from "../../../../Redux/layersReducer"

let mapStateToProps = (state) => ({
    tableEntries: getTableEntries(state),
    tags: getUniqueTags(state),
    $key: getKey(state),
    userToken: getUserToken(state),
});

let DataTableContainer = connect(mapStateToProps, {
    addTableEntry,
    updateTableEntry,
    deleteTableEntry,
})(DataTable);

export default DataTableContainer;
