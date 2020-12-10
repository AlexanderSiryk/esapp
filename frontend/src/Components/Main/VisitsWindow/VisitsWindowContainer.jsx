import {connect} from "react-redux";
import VisitsWindow from "./VisitsWindow";
import {getVisits} from "../../../Redux/Selectors/layersSelectors";

let mapStateToProps = (state) => ({
    visits: getVisits(state),
});

let VisitsWindowContainer = connect(mapStateToProps, {})(VisitsWindow);

export default VisitsWindowContainer;
