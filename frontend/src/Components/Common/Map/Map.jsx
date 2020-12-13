import React, {useState} from "react";
import * as PropTypes from "prop-types";
import {GoogleMap, Marker, withGoogleMap, withScriptjs} from "react-google-maps";
import {LinearProgress} from "@material-ui/core";

const styles = [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36,
            },
            {
                "color": "#707070",
            },
            {
                "lightness": 40,
            },
        ],
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on",
            },
            {
                "color": "#000000",
            },
            {
                "lightness": 16,
            },
        ],
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off",
            },
        ],
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000",
            },
            {
                "lightness": 20,
            },
        ],
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000",
            },
            {
                "lightness": 17,
            },
            {
                "weight": 1.2,
            },
        ],
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#424242",
            },
        ],
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000",
            },
            {
                "lightness": 21,
            },
        ],
    },
    {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on",
            },
        ],
    },
    {
        "featureType": "poi",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off",
            },
        ],
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "lightness": 17,
            },
            {
                "color": "#484848",
            },
        ],
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "lightness": 29,
            },
            {
                "weight": 0.2,
            },
            {
                "color": "#ff0000",
            },
            {
                "visibility": "off",
            },
        ],
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000",
            },
            {
                "lightness": 18,
            },
        ],
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000",
            },
            {
                "lightness": 16,
            },
        ],
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000",
            },
            {
                "lightness": 19,
            },
        ],
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000",
            },
            {
                "lightness": 17,
            },
        ],
    },
];

const GMap = (props) => {
    const [markerPosition, setMarkerPosition] = useState();

    const options = {
        styles: props.darkMode && styles,
        streetViewControl: false,
    };

    return <GoogleMap
        defaultZoom={5}
        defaultCenter={{lat: 50, lng: 0}}
        options={options}
        onClick={createMarker.bind(null, setMarkerPosition, props.onWaypointCreated)}>
        {markerPosition && <Marker position={markerPosition}/>}
    </GoogleMap>;
};

const WrappedMap = withScriptjs(withGoogleMap(GMap));

const Map = (props) => {
    return <div style={{width: "100%", height: "100%", margin: "0, auto"}}>
        <WrappedMap
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCH-8_X66ZfMQvKo5FQZto7x36IlmyxDiA"
            loadingElement={<LinearProgress/>}
            containerElement={<div style={{height: `100%`}}/>}
            mapElement={<div style={{height: `100%`}}/>}
            darkMode={props.darkMode}
            onWaypointCreated={props.onWaypointCreated}
        />
    </div>;
};

Map.propTypes = {
    darkMode: PropTypes.bool,
    onWaypointCreated: PropTypes.func,
};

export default Map;

function createMarker(setPosition, onCreated, e) {
    setPosition(e.latLng);

    if (onCreated) {
        onCreated({lat: e.latLng.lat(), lng: e.latLng.lng()});
    }
}
