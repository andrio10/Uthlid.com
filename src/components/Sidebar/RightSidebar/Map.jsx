import React from "react";
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import styled from "styled-components";

const position = [64.279573, -20.444255];
const Maps = () => (
  <Try center={position} zoom={13}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        Úthlíð Cottages, <br /> 801 Selfoss
      </Popup>
    </Marker>
  </Try>
);
export default Maps;

const Try = styled(LeafletMap)`
  width: 320px;
  height: 80%;
  overflow: hidden;
`;
