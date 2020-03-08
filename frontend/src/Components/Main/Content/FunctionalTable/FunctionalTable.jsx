import DataTableContainer from "./DataTable/DataTableContainer";
import ModalWindowAddContainer from "./ModalWindowAdd/ModalWindowAddContainer";
import HeadRowContainer from "./HeadRow/HeadRowContainer";
import React from "react";
import ModalWindowEditContainer from "./ModalWindowEdit/ModalWindowEditContainer";

let FunctionalTable = () => {
	return (
		<>
			<HeadRowContainer/>
			<DataTableContainer/>
			<ModalWindowAddContainer/>
			<ModalWindowEditContainer/>
		</>
	);
};

export default FunctionalTable;