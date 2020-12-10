import {connect} from "react-redux";
import TrashWindow from "./TrashWindow";
import {getDeletedTableEntries, getUserToken} from "../../../Redux/Selectors/layersSelectors";
import {restoreDeletedEntry, removeDeletedEntry} from "../../../Redux/layersReducer";

let mapStateToProps = (state) => ({
    tableEntries: getDeletedTableEntries(state),
    userToken: getUserToken(state),
});

let TrashWindowContainer = connect(mapStateToProps, {
    restoreDeletedEntry,
    removeDeletedEntry,
})(TrashWindow);

export default TrashWindowContainer;
