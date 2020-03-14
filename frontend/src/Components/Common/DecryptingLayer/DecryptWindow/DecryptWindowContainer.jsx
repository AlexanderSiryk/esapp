import {connect} from "react-redux";
import DecryptWindow from "./DecryptWindow";
import {setIsDecrypted} from "../../../../Redux/layersReducer";

let mapStateToProps = () => {
	return {

	}
}

let DecryptWindowContainer = connect(mapStateToProps, {
	setIsDecrypted
})(DecryptWindow);

export default DecryptWindowContainer;