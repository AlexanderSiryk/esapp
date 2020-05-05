import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";

function CellItem({copyFunc, field, hiddenText}) {
	return <Tooltip title="Copy" placement="left">
		<Button onClick={copyFunc.bind(null, field)}
				style={{
					textTransform: "none",
					fontFamily: hiddenText
						? "'Libre Barcode 128', cursive"
						: "'Roboto', sans-serif",
				}}
		>
			{hiddenText ? "dummyChars" : field}</Button>
	</Tooltip>
}

export default CellItem;