import useTableStyles from "../DataTableStyle";
import React, {useState} from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

const PasswordInput = (props) => {
	const inputId = `password-${Math.floor(Math.random() * 100)}-${Date.now()}`;
	const classes = useTableStyles();

	const labelTitle = props.columnDef.title;
	const [state, setState] = useState({
		value: props.rowData[props.columnDef.field],
		showPassword: false,
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

	return <FormControl className={`${classes.textField}`}>
		<InputLabel htmlFor={inputId}>{labelTitle}</InputLabel>
		<Input
			id={inputId}
			type={state.showPassword ? 'text' : 'password'}
			value={state.value}
			onChange={handleChange}
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

export default PasswordInput;