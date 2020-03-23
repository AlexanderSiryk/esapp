import React from "react";
import {connect} from "react-redux";
import DecryptWindow from "./DecryptWindow";
import {freeUpImageKey, setImageKey, setIsDecrypted} from "../../../../Redux/layersReducer";
import {getImageKey} from "../../../../Redux/Selectors/layersSelectors";
import {calcKey, getImage} from "../../../../API/encryptingOperations";
import {getTableEntries} from "../../../../Redux/Selectors/contentSelectors";
import {setTableEntriesDecrypted} from "../../../../Redux/contentReducer";

let dwc = (props) => {
	return (<DecryptWindow
		calcKey={calcKey}
		getImage={getImage}
		imageKey={props.imageKey}
		setIsDecrypted={props.setIsDecrypted}
		setImageKey={props.setImageKey}
		freeUpImageKey={props.freeUpImageKey}
		tableEntries={props.tableEntries}
		setTableEntriesDecrypted={props.setTableEntriesDecrypted}
	/>);
}

let mapStateToProps = (state) => {
	return {
		imageKey: getImageKey(state),
		tableEntries: getTableEntries(state),
	}
}

let DecryptWindowContainer = connect(mapStateToProps, {
	setIsDecrypted,
	setImageKey,
	freeUpImageKey,
	setTableEntriesDecrypted,
})(dwc);

export default DecryptWindowContainer;