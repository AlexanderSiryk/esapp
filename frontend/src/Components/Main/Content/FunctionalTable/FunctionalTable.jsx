import DataTableContainer from "./DataTable/DataTableContainer";
import ModalWindowAddContainer from "./ModalWindowAdd/ModalWindowAddContainer";
import React from "react";
import ModalWindowEditContainer from "./ModalWindowEdit/ModalWindowEditContainer";
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