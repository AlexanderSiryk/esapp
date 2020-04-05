import {Autocomplete} from "@material-ui/lab";
import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";

const LookupAutocompleteInput = (props) => {
	console.log(props);
	const labelTitle = props.columnDef.title;
	const [state, setState] = useState({
		value: props.rowData[props.columnDef.field],
	});
	const lookupObj = props.columnDef.lookup;
	const lookupArr = [];
	for (const prop in lookupObj) {
		if (lookupObj.hasOwnProperty(prop)) lookupArr.push({["title"]: lookupObj[prop]});
	}

	const handleInputChange = (event, value) => {
		if (!event || event.type === "keydown") return;
		setState({...state, value: value});
	}
	const handleChange = (event, value) => {
		if (!event) return;
		if (value?.title && value !== "") setState({...state, value: value.title});
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