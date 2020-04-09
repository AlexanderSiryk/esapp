import {Autocomplete} from "@material-ui/lab";
import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";

const LookupAutocompleteInput = (props) => {
	const labelTitle = props.columnDef.title;
	const [state, setState] = useState({
		value: props.rowData[props.columnDef.field] || "",
	});
	const lookupObj = props.columnDef.lookup;
	const lookupArr = Object.values(lookupObj);

	const handleInputChange = (event, value) => {
		if (!event || event.type === "keydown" || value === state.value) return;
		props.onChange(value);
		setState({...state, value});
	}
	const handleChange = (event, value) => {
		if (!event || !value) return;
		props.onChange(value.title || value);
		setState({...state, value: value.title || value});
	}

	return <Autocomplete
		options={lookupArr}
		freeSolo
		inputValue={state.value}
		onInputChange={handleInputChange}
		onChange={handleChange}
		getOptionLabel={(option) => option.title || option}
		renderInput={(params) => <TextField {...params} label={labelTitle || ""}/>}
	/>
}

export default LookupAutocompleteInput;