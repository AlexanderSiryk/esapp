import React from "react";
import {connect} from "react-redux";
import DecryptWindow from "./DecryptWindow";
import {freeUpImageKey, setImageKey, setIsDecrypted, setKey} from "../../../../Redux/layersReducer";
import {getImageKey} from "../../../../Redux/Selectors/layersSelectors";
import {calcKey, getImage} from "../../../../API/encryptingOperations";
import {getTableEntries} from "../../../../Redux/Selectors/contentSelectors";

let dwc = (props) => {
	return (<DecryptWindow
		calcKey={calcKey}
		getImage={getImage}
		imageKey={props.imageKey}
		setIsDecrypted={props.setIsDecrypted}
		setImageKey={props.setImageKey}
		setKey={props.setKey}
		freeUpImageKey={props.freeUpImageKey}
		tableEntries={props.tableEntries}
	/>);
}

// TODO tableEntries is redundant

let mapStateToProps = (state) => {
	return {
		imageKey: getImageKey(state),
		tableEntries: getTableEntries(state),
	}
}

let DecryptWindowContainer = connect(mapStateToProps, {
	setIsDecrypted,
	setImageKey,
	setKey,
	freeUpImageKey,
})(dwc);

export default DecryptWindowContainer;