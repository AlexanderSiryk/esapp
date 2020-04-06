import {Autocomplete} from "@material-ui/lab";
import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";

const LookupAutocompleteInput = (props) => {
	const labelTitle = props.columnDef.title;
	const [state, setState] = useState({
		value: props.rowData[props.columnDef.field],
	});
	const lookupObj = props.columnDef.lookup;
	const lookupArr = [];		// Lookup for select
	for (const prop in lookupObj) {
		if (lookupObj.hasOwnProperty(prop)) {
			lookupArr.push({["title"]: lookupObj[prop]});
		}
	}

	const handleInputChange = (event, value) => {
		if (!event || event.type === "keydown" || value === state.value) return;
		props.onChange(value);
		setState({...state, value});
	}
	const handleChange = (event, value) => {
		if (!event) return;
		if (value?.title && value !== "") {
			props.onChange(value.title);
			setState({...state, value: value.title});
		}
	}

	return <Autocomplete
		options={lookupArr}
		freeSolo
		inputValue={state.value}
		onInputChange={handleInputChange}
		onChange={handleChange}
		getOptionLabel={(option) => option.title}
		renderInput={(params) => <TextField {...params} label={labelTitle}/>}
	/>
}

export default LookupAutocompleteInput;