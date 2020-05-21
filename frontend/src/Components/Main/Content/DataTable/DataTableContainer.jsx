import {connect} from "react-redux";
import DataTable from "./DataTable";
import {getTableEntries, getUniqueTags} from "../../../../Redux/Selectors/contentSelectors";
import {getKey, getUserToken} from "../../../../Redux/Selectors/layersSelectors";

let mapStateToProps = (state) => ({
	tableEntries: getTableEntries(state),
	tags: getUniqueTags(state),
    $key: getKey(state),
    userToken: getUserToken(state),
});

let DataTableContainer = connect(mapStateToProps, {})(DataTable);

export default DataTableContainer;
