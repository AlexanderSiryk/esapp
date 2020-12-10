import {connect} from "react-redux";
import TrashWindow from "./TrashWindow";
import {getDeletedTableEntries} from "../../../Redux/Selectors/layersSelectors";

let mapStateToProps = (state) => ({
    tableEntries: getDeletedTableEntries(state),
});

let TrashWindowContainer = connect(mapStateToProps, {
})(TrashWindow);

export default TrashWindowContainer;
