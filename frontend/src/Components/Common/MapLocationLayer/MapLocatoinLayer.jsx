import React, {useState} from "react";
import Map from "../Map/Map";
import Button from "@material-ui/core/Button";
import LoadingWindow from "../LoadingWindow/LoadingWindow";
import Main from "../../Main/Main";
import {Redirect} from "react-router-dom";
import server from "../../../API/DAL_API";
import DecryptWindowContainer from "../DecryptingLayer/DecryptWindow/DecryptWindowContainer";


const MapLocationLayer = ({userToken, ...props}) => {
    const [coords, setCoords] = useState();
    const [serverResponse, setServerResponse] = useState();
    const [isLoading, setIsLoading] = useState(false);

    if (props.isFirstSignIn) {
        props.setTableEntries([]);
        props.toggleKeyModal();
        return <>
            <Main/>
            <Redirect
                to={{
                    pathname: "/content",
                }}
            />
        </>;
    }

    function proceedWithCurrentLocation() {
        setIsLoading(true);

        server.checkLastLocation(userToken, coords.lat, coords.lng)
            .then(res => {
                setServerResponse(res.data || {});
                setIsLoading(false);
            })
            .catch(console.error);
    }

    return <>
        {!serverResponse && <>
            <div style={{width: "100vw", height: "100vh"}}>
                <Map darkMode onWaypointCreated={setCoords}/>
            </div>
            {coords && <div style={{
                position: "absolute",
                bottom: 20,
                left: 0,
                right: 0,
                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "center",
            }}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={proceedWithCurrentLocation}>
                    I confirm my last location
                </Button>
            </div>}
        </>}
        {serverResponse && serverResponse.success === true
            ? <DecryptWindowContainer/>
            : <div style={{
                color: "crimson",
                fontSize: "24px",
                width: "100vw",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>
                Oops, looks like you've entered wrong location
            </div>}
        {isLoading && <LoadingWindow/>}
    </>;
};

export default MapLocationLayer;
