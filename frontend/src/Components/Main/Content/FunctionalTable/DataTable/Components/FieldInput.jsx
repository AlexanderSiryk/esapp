import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";

const FieldInput = (props) => {
	const labelTitle = props.columnDef.title;
	const [state, setState] = useState({
		value: props.rowData[props.columnDef.field],
	});

	const handleChange = (event) => {
		props.onChange(event.target.value);
		setState({...state, value: event.target.value});
	}

	return <TextField
		value={state.value}
		label={labelTitle}
		onChange={handleChange}
	/>
}

export default FieldInput;