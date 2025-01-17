/*Since the map was loaded on client side, 
we need to make this component client rendered as well*/
'use client'

import { GoogleMap, Marker } from "@react-google-maps/api";
import { useState, useCallback } from "react";

//Map's styling
const defaultMapContainerStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '15px 0px 0px 15px',
};

//K2's coordinates
const defaultMapCenter = {
    lat: 35.8799866,
    lng: 76.5048004
}

//Default zoom level, can be adjusted
const defaultMapZoom = 18

//Map options
const defaultMapOptions = {
    zoomControl: true,
    tilt: 0,
    gestureHandling: 'auto',
    mapTypeId: 'satellite',
};

const MapComponent = () => {
    // State to track the current center of the map
    const [center, setCenter] = useState(defaultMapCenter);

    // Callback function that fires when the map's center changes
    const onCenterChanged = useCallback(() => {
        // We'll update this when we have access to the map instance
    }, []);

    // Callback to store the map instance
    const [map, setMap] = useState<google.maps.Map | null>(null);
    const onLoad = useCallback((map: google.maps.Map) => {
        setMap(map);
    }, []);

    // Update center when map is dragged
    const onDragEnd = () => {
        if (map) {
            const newCenter = map.getCenter();
            if (newCenter) {
                setCenter({
                    lat: newCenter.lat(),
                    lng: newCenter.lng()
                });
            }
        }
    };

    return (
        <GoogleMap
            mapContainerStyle={defaultMapContainerStyle}
            center={defaultMapCenter}
            zoom={defaultMapZoom}
            options={defaultMapOptions}
            onLoad={onLoad}
            onDragEnd={onDragEnd}
        >
            <Marker
                position={center}
                // Optional: make the marker draggable
                draggable={false}
            />
        </GoogleMap>
    );
};

export { MapComponent };
