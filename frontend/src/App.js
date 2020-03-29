import React from "react";
import "./App.css";
import LoggedInCheckLayerContainer from "./Components/Common/LoggedInCheckLayer/LoggedInCheckLayerContainer";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {MuiThemeProvider} from "@material-ui/core";

function App() {
	const themeMode = "dark";
	const theme = createMuiTheme({
		palette: {
			type: themeMode,
		}
	});
	return (
		<MuiThemeProvider theme={theme}>
			<LoggedInCheckLayerContainer/>
		</MuiThemeProvider>
	);
}

export default App;
