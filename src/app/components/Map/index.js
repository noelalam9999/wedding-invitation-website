"use client";
import React, { useEffect, useRef, useState } from "react";
import Map, { Marker } from "react-map-gl";
import Crest from "../../../assets/crest.svg";
import Markers from "./Marker";

function MapComponent() {
  // console.log(Crest);
  return (
    <Map
      initialViewState={{
        latitude: 24.904371,
        longitude: 91.892136,
        zoom: 12,
        bearing: 0,
        pitch: 0,
      }}
      mapStyle="mapbox://styles/mapbox/outdoors-v12"
      mapboxAccessToken={
        "pk.eyJ1Ijoibm9lbGFsYW0iLCJhIjoiY2xwNjBrYWpjMXR2bjJscXl0NTc3ODBuZiJ9.sceo6XgSRD6lKMYOAVgEpA"
      }
    >
      <Marker longitude={91.892136} latitude={24.904371} anchor="bottom">
        <Markers />
      </Marker>
    </Map>
  );
}

export default MapComponent;
