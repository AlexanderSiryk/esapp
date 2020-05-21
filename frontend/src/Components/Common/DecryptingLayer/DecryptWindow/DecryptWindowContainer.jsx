import {connect} from "react-redux";
import DecryptWindow from "./DecryptWindow";
import {
    fetchEntries, setDecryptedTableEntries,
    setIsDecrypted, setKey
} from "../../../../Redux/layersReducer";
import {calcKey, getImage} from "../../../../API/encryptingOperations";
import {
    getFetchError,
    getIsFetching, getTableEntries,
    getUserToken
} from "../../../../Redux/Selectors/layersSelectors";

let mapStateToProps = (state) => ({
    tableEntries: getTableEntries(state),
    isFetching: getIsFetching(state),
    fetchError: getFetchError(state),
    calcKey: calcKey,
    getImage: getImage,
    userToken: getUserToken(state),
});

let DecryptWindowContainer = connect(mapStateToProps, {
    setIsDecrypted,
    setTableEntriesDecrypted: setDecryptedTableEntries,
    fetchEntries,
    setKey,
})(DecryptWindow);

export default DecryptWindowContainer;
