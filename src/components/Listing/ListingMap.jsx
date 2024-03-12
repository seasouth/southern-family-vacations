//import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import React, { useState, useEffect } from 'react'
import { Map, GeoJson, GeoJsonFeature, ZoomControl } from "pigeon-maps";
import 'leaflet/dist/leaflet.css'

const ListingMap = ({lat, long, isMobile}) => {
    const circleSize = 0.015;
    const numPoints = 1000;
    const generateCircle = () => {
        const outerPoints = [];
        const points = [];
        let firstPass;
        for (let i = 0; i < numPoints; i++) {
            const theta = (i / numPoints) * 2 * Math.PI;
            const x = Math.cos(theta).toFixed(2) * circleSize + long;
            const y = (Math.sin(theta).toFixed(2) * 0.85 * circleSize + lat);
            points.push([x, y]);
            if (i == 0) {
                firstPass = [x, y];
            }
        }
        points.push(firstPass);
        outerPoints.push(points);
        return outerPoints;
    };

    const ftr = {
        type: "Feature",
        geometry: { 
            type: "Polygon", 
            coordinates: generateCircle(),
        },
        properties: { prop0: "value0" },
    };

    return (
        <Map 
            height={isMobile ? 250 : 300} 
            defaultCenter={[lat, long]}
            defaultZoom={11}
            maxZoom={14}
        >
            <GeoJson
                svgAttributes={{
                    fill: "#d4e6ec99",
                    strokeWidth: "1",
                    stroke: "white",
                    r: 10,
                }}
            >
                <GeoJsonFeature feature={ftr} />
            </GeoJson>
            <ZoomControl />
        </Map>

    )
}

export default ListingMap;