import DataTableContainer from "./DataTable/DataTableContainer";
import ModalWindowAddContainer from "../../../Common/ModalWindows/ModalWindowAdd/ModalWindowAddContainer";
import React from "react";
import ModalWindowEditContainer from "../../../Common/ModalWindows/ModalWindowEdit/ModalWindowEditContainer";
import HeadRow from "./HeadRow/HeadRow";

let FunctionalTable = () => {
	return <>
		<HeadRow/>
		<DataTableContainer/>
		<ModalWindowAddContainer/>
		<ModalWindowEditContainer/>
	</>
}

export default FunctionalTable;