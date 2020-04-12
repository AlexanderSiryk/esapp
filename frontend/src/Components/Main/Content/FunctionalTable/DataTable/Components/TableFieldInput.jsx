import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import PropTypes from 'prop-types';

const TableFieldInput = ({useAutofocus, ...props}) => {
	const labelTitle = props.columnDef.title;
	const [state, setState] = useState({
		value: props.rowData[props.columnDef.field] || "",
		addMode: false,
	});

	const handleChange = (event) => {
		props.onChange(event.target.value);
		setState({...state, value: event.target.value});
	}

	return <TextField
		value={state.value}
		label={labelTitle}
		onChange={handleChange}
		autoFocus={useAutofocus}
	/>
}

TableFieldInput.propTypes = {
	useAutofocus: PropTypes.bool,
}

export default TableFieldInput;