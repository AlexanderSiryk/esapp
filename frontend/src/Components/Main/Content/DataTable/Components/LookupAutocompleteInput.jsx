import {Autocomplete} from "@material-ui/lab";
import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import isInputValueValid from "../../../../../API/validation";
import PropTypes from "prop-types";

const LookupAutocompleteInput = (props) => {
    const labelTitle = props.columnDef.title;
    const [state, setState] = useState({
        value: props.rowData[props.columnDef.field] || "",
        validationError: props.validationError,
        errorText: props.validationError ? ": (Incorrect entry)" : "",
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
    const handleFocus = () => {
        setState({
            ...state,
            validationError: false,
            errorText: "",
        });
    }
    const handleBlur = () => {
        const validationError = !isInputValueValid("tag", state.value);
        const errorText = validationError ? ": (Incorrect entry)" : "";
        props.setValidationError(validationError);
        setState({
            ...state,
            validationError,
            errorText,
        });
    }

    return <Autocomplete
        options={lookupArr}
        freeSolo
        inputValue={state.value}
        onInputChange={handleInputChange}
        onChange={handleChange}
        getOptionLabel={(option) => option.title || option}
        renderInput={(params) => <TextField
            {...params}
            error={state.validationError}
            onFocus={handleFocus}
            onBlur={handleBlur}
            label={labelTitle + state.errorText || ""}
        />}
    />
}

LookupAutocompleteInput.propTypes = {
    validationError: PropTypes.bool.isRequired,
    setValidationError: PropTypes.func.isRequired,
}

export default LookupAutocompleteInput;
