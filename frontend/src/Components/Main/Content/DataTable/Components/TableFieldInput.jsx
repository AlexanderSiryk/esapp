import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import PropTypes from 'prop-types';
import isInputValueValid from "../../../../../API/validation";

const TableFieldInput = ({useAutofocus, type, ...props}) => {
    const labelTitle = props.columnDef.title;
    const [state, setState] = useState({
        value: props.rowData[props.columnDef.field] || "",
        addMode: false,
        validationError: props.validationError,
        errorText: props.validationError ? ": (Incorrect entry)" : "",
    });

    const handleChange = event => {
        props.onChange(event.target.value);
        setState({
                ...state,
                value: event.target.value,
            }
        );
    }
    const handleFocus = () => {
        setState({
            ...state,
            validationError: false,
            errorText: "",
        });
    }
    const handleBlur = () => {
        const validationError = !isInputValueValid(type, state.value);
        const errorText = validationError ? ": (Incorrect entry)" : "";
        props.setValidationError(validationError);
        setState({
            ...state,
            validationError,
            errorText,
        });
    }

    return <TextField
        error={state.validationError}
        value={state.value}
        label={labelTitle + state.errorText}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        autoFocus={useAutofocus}
    />
}

TableFieldInput.propTypes = {
    useAutofocus: PropTypes.bool,
    type: PropTypes.string.isRequired,
    validationError: PropTypes.bool.isRequired,
    setValidationError: PropTypes.func.isRequired,
}

export default TableFieldInput;
