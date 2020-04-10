import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import React, {useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
	textField: {
		minWidth: '15ch',
	},
}));

function PasswordField({onChange, value, autoFocus}) {
	const classes = useStyles();
	const inputId = `password-${Math.floor(Math.random() * 100)}-${Date.now()}`;

	const [state, setState] = useState({
		value: value || "",
		showPassword: false,
	});

	const handleChange = (event) => {
		onChange(event.target.value);
		setState({...state, value: event.target.value});
	}

	const handleClickShowPassword = () => {
		setState({...state, showPassword: !state.showPassword});
	}

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	}
	return <FormControl className={`${classes.textField}`}>
		<InputLabel htmlFor={inputId}>Enter your password</InputLabel>
		<Input
			id={inputId}
			type={state.showPassword ? 'text' : 'password'}
			value={state.value}
			autoFocus={autoFocus}
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

PasswordField.propTypes = {
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string,
	autoFocus: PropTypes.bool,
}

export default PasswordField;