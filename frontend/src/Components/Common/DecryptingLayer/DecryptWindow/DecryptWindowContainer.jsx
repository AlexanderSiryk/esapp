import {connect} from "react-redux";
import DecryptWindow from "./DecryptWindow";
import {fetchEntries, setIsDecrypted, setKey} from "../../../../Redux/layersReducer";
import {calcKey, getImage} from "../../../../API/encryptingOperations";
import {getTableEntries} from "../../../../Redux/Selectors/contentSelectors";
import {setDecryptedTableEntries} from "../../../../Redux/contentReducer";
import {getFetchError, getIsFetching} from "../../../../Redux/Selectors/layersSelectors";

let mapStateToProps = (state) => ({
	tableEntries: getTableEntries(state),
	isFetching: getIsFetching(state),
	fetchError: getFetchError(state),
	calcKey: calcKey,
	getImage: getImage,
});

let DecryptWindowContainer = connect(mapStateToProps, {
	setIsDecrypted,
	setTableEntriesDecrypted: setDecryptedTableEntries,
	fetchEntries,
	setKey,
})(DecryptWindow);

export default DecryptWindowContainer;