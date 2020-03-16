import {connect} from "react-redux";
import Sidebar from "./Sidebar";
import {getMenuItems} from "../../Redux/Selectors/sidebarSelectors";

let mapStateToProps = (state) => {
	return ({
		items: getMenuItems(state),
	});
};

let SidebarContainer = connect(mapStateToProps, {})(Sidebar);

export default SidebarContainer;