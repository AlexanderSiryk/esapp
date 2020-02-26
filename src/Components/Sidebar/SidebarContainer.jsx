import {connect} from "react-redux";
import Sidebar from "./Sidebar";

let mapStateToProps = (state) => {
	return ({
		items: state.sidebar.items,
	});
};

let mapDispatchToProps = () => {
	return ({

	});
};

let SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default SidebarContainer;