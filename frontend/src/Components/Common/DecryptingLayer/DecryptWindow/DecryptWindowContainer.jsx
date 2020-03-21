import React from "react";
import {connect} from "react-redux";
import DecryptWindow from "./DecryptWindow";
import {setImageKey, setIsDecrypted, setKey} from "../../../../Redux/layersReducer";
import {getImageKey} from "../../../../Redux/Selectors/layersSelectors";
import {calcKey, getImage} from "../../../../API/dataImageAPI";

let dwc = (props) => {
	return (<DecryptWindow
		calcKey={calcKey}
		getImage={getImage}
		imageKey={props.imageKey}
		setIsDecrypted={props.setIsDecrypted}
		setImageKey={props.setImageKey}
		setKey={props.setKey}
	/>);
}

let mapStateToProps = (state) => {
	return {
		imageKey: getImageKey(state),
	}
}

let DecryptWindowContainer = connect(mapStateToProps, {
	setIsDecrypted,
	setImageKey,
	setKey,
})(dwc);

export default DecryptWindowContainer;