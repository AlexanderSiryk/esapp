import {connect} from "react-redux";
import Sidebar from "./Sidebar";
import {getMenuItems} from "../../Redux/sidebarSelectors";

let mapStateToProps = (state) => {
	return ({
		items: getMenuItems(state),
	});
};

let SidebarContainer = connect(mapStateToProps, {})(Sidebar);

export default SidebarContainer;