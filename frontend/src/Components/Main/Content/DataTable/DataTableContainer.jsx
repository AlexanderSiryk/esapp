import {connect} from "react-redux";
import DataTable from "./DataTable";
import {
    getKey, getTableEntries,
    getUniqueTags, getUserToken
} from "../../../../Redux/Selectors/layersSelectors";

let mapStateToProps = (state) => ({
    tableEntries: getTableEntries(state),
    tags: getUniqueTags(state),
    $key: getKey(state),
    userToken: getUserToken(state),
});

let DataTableContainer = connect(mapStateToProps, {})(DataTable);

export default DataTableContainer;
