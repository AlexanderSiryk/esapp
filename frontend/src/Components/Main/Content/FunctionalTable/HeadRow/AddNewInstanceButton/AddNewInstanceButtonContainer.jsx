import {connect} from "react-redux";
import AddNewInstanceButton from "./AddNewInstanceButton";
import {toggleAddWindow} from "../../../../../../Redux/contentReducer";

let mapStateToProps = () => ({});

let AddNewInstanceButtonContainer = connect(mapStateToProps, {
	toggleAddWindow
})(AddNewInstanceButton);

export default AddNewInstanceButtonContainer;