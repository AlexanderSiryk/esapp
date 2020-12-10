import {connect} from "react-redux";
import DecryptWindow from "./DecryptWindow";
import {
    init, setDeletedTableEntries,
    setIsDecrypted, setKey, setTableEntries,
} from "../../../../Redux/layersReducer";
import {calcKey, getImage} from "../../../../API/encryptingOperations";
import {
    getDeletedTableEntries,
    getFetchError,
    getIsFetching, getTableEntries, getUserEmail,
    getUserToken,
} from "../../../../Redux/Selectors/layersSelectors";

let mapStateToProps = (state) => ({
    tableEntries: getTableEntries(state),
    deletedTableEntries: getDeletedTableEntries(state),
    isFetching: getIsFetching(state),
    fetchError: getFetchError(state),
    calcKey: calcKey,
    getImage: getImage,
    userEmail: getUserEmail(state),
    userToken: getUserToken(state),
});

let DecryptWindowContainer = connect(mapStateToProps, {
    setIsDecrypted,
    setTableEntries,
    setDeletedTableEntries,
    init,
    setKey,
})(DecryptWindow);

export default DecryptWindowContainer;
