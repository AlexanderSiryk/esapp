import {connect} from "react-redux";
import TrashWindow from "./TrashWindow";
import {getTableEntries} from "../../../Redux/Selectors/layersSelectors";

let mapStateToProps = (state) => ({
    tableEntries: getTableEntries(state),
});

let TrashWindowContainer = connect(mapStateToProps, {
})(TrashWindow);

export default TrashWindowContainer;
