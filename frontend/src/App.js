import React from "react";
import "./App.css";
import LoggedInCheckLayerContainer from
		"./Components/Common/LoggedInCheckLayer/LoggedInCheckLayerContainer";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {MuiThemeProvider} from "@material-ui/core";
import green from '@material-ui/core/colors/green';
import lime from "@material-ui/core/colors/lime";
import orange from "@material-ui/core/colors/orange";

function App() {
	const themeMode = "dark";
	const theme = createMuiTheme({
		palette: {
			type: themeMode,
			primary: themeMode === "dark"
				? lime
				: green,
			secondary: orange,
		},
		customProps: {
			appBarOffset: 40,
		}
	});
	return (
		<MuiThemeProvider theme={theme}>
			<LoggedInCheckLayerContainer/>
		</MuiThemeProvider>
	);
}

export default App;
