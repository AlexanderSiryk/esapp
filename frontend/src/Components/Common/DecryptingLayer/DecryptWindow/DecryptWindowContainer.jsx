import {connect} from "react-redux";
import DecryptWindow from "./DecryptWindow";
import {freeUpImageKey, setImageKey, setIsDecrypted} from "../../../../Redux/layersReducer";
import {getImageKey} from "../../../../Redux/Selectors/layersSelectors";
import {calcKey, getImage} from "../../../../API/encryptingOperations";
import {getTableEntries} from "../../../../Redux/Selectors/contentSelectors";
import {setTableEntriesDecrypted} from "../../../../Redux/contentReducer";

let mapStateToProps = (state) => ({
	imageKey: getImageKey(state),
	tableEntries: getTableEntries(state),
	calcKey: calcKey,
	getImage: getImage,
});

let DecryptWindowContainer = connect(mapStateToProps, {
	setIsDecrypted,
	setImageKey,
	freeUpImageKey,
	setTableEntriesDecrypted,
})(DecryptWindow);

export default DecryptWindowContainer;