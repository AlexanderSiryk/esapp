import {connect} from "react-redux";
import DecryptWindow from "./DecryptWindow";
import {setIsDecrypted} from "../../../../Redux/layersReducer";
import {calcKey, getImage} from "../../../../API/encryptingOperations";
import {getTableEntries} from "../../../../Redux/Selectors/contentSelectors";
import {setTableEntriesDecrypted} from "../../../../Redux/contentReducer";

let mapStateToProps = (state) => ({
	tableEntries: getTableEntries(state),
	calcKey: calcKey,
	getImage: getImage,
});

let DecryptWindowContainer = connect(mapStateToProps, {
	setIsDecrypted,
	setTableEntriesDecrypted,
})(DecryptWindow);

export default DecryptWindowContainer;