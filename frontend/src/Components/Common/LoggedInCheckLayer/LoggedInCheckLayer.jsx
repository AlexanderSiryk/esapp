import React from "react";
import {Redirect, Route} from "react-router-dom";
import LoginPage from "./LoginPage/LoginPage";
import MapLocationLayerContainer from "../MapLocationLayer/MapLocationLayerContainer";

let LoggedInCheckLayer = ({isSignedIn}) => {
    return isSignedIn
        ? <MapLocationLayerContainer/>
        : <>
            <Route
                path="/login"
                render={() => <LoginPage/>}
            />
            <Redirect
                to={{
                    pathname: "/login"
                }}
            />
        </>
}

export default LoggedInCheckLayer;
