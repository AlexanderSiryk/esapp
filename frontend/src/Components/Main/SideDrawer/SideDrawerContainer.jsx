import {connect} from "react-redux";
import SideDrawer from "./SideDrawer";
import {toggleSidebar} from "../../../Redux/sidebarReducer";
import {getIsSidebarShown} from "../../../Redux/Selectors/sidebarSelectors";

let mapStateToProps = (state) => ({
	isSidebarShown: getIsSidebarShown(state),
});

let SideDrawerContainer = connect(mapStateToProps, {
	toggleSidebar,
})(SideDrawer);

export default SideDrawerContainer;