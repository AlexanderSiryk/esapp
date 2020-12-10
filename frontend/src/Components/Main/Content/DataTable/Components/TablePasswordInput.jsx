import useTableStyles from "../DataTableStyle";
import React, {useState} from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import isInputValueValid from "../../../../../API/validation";
import PropTypes from "prop-types";

const TablePasswordInput = (props) => {
    const inputId = `password-${Math.floor(Math.random() * 100)}-${Date.now()}`;
    const classes = useTableStyles();
    const labelTitle = props.columnDef.title;
    const [state, setState] = useState({
        value: props.rowData[props.columnDef.field] || "",
        showPassword: false,
        validationError: props.validationError,
        errorText: props.validationError ? ": (Incorrect entry)" : "",
    });

    const handleChange = (event) => {
        props.onChange(event.target.value);
        setState({...state, value: event.target.value});
    }
    const handleClickShowPassword = () => {
        setState({...state, showPassword: !state.showPassword});
    }
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }
    const handleFocus = () => {
        setState({
            ...state,
            validationError: false,
            errorText: "",
        });
    }
    const handleBlur = () => {
        const validationError = !isInputValueValid("password", state.value);
        const errorText = validationError ? ": (Incorrect entry)" : "";
        props.setValidationError(validationError);
        setState({
            ...state,
            validationError,
            errorText,
        });
    }

    return <FormControl className={`${classes.textField}`}>
        <InputLabel
            error={state.validationError}
            htmlFor={inputId}>
            {labelTitle + state.errorText}
        </InputLabel>
        <Input
            error={state.validationError}
            id={inputId}
            type={state.showPassword ? 'text' : 'password'}
            value={state.value}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            endAdornment={<InputAdornment position="end">
                <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}>
                    {state.showPassword ? <Visibility/> : <VisibilityOff/>}
                </IconButton>
            </InputAdornment>}
        />
    </FormControl>
}

TablePasswordInput.propTypes = {
    validationError: PropTypes.bool.isRequired,
    setValidationError: PropTypes.func.isRequired,
}

export default TablePasswordInput;
