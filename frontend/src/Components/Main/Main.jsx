import React from "react";
import s from "./Main.module.css"
import {Route} from "react-router-dom";
import Content from "./Content/Content";
import Tags from "./Tags/Tags";
import PreferencesContainer from "./Preferences/PreferencesContainer";

let Main = () => {
	return (
		<div className={s.container}>
			<Route
				path="/content"
				render={() => <Content/>}
			/>
			<Route
				path="/tags"
				render={() => <Tags/>}
			/>
			<Route
				path="/preferences"
				render={() => <PreferencesContainer/>}
			/>
		</div>
	);
};

export default Main;