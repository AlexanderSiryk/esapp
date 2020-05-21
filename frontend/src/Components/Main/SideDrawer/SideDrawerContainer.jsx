import {connect} from "react-redux";
import SideDrawer from "./SideDrawer";
import {toggleSidebar} from "../../../Redux/layersReducer";
import {getIsSidebarShown} from "../../../Redux/Selectors/layersSelectors";

let mapStateToProps = (state) => ({
	isSidebarShown: getIsSidebarShown(state),
});

let SideDrawerContainer = connect(mapStateToProps, {
	toggleSidebar,
})(SideDrawer);

export default SideDrawerContainer;
