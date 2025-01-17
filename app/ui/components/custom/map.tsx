/*Since the map was loaded on client side, 
we need to make this component client rendered as well*/
'use client'

import { Map as MapComponent, Marker, MapCameraChangedEvent } from "@vis.gl/react-google-maps";
import { useCallback, useState } from "react";

// Set the marker at the center of the map when user drags the map  
// Solution 1

const DEFAULT_CENTER = { lat: 22.54992, lng: 0 }




function Map() {
    const [center, setCetner] = useState(DEFAULT_CENTER)
    const [query, setQuery] = 


    const handleCameraChange = useCallback((ev: MapCameraChangedEvent) => {
        console.log('camera changed: ', ev.detail);
        console.log("ev.type", ev.type)
        setCetner(ev.detail.center)

    }, []);

    return (
        <MapComponent
            style={{ width: '100%', height: '100%' }}
            defaultCenter={DEFAULT_CENTER}
            defaultZoom={3}
            gestureHandling={'greedy'}
            disableDefaultUI={true}
            onCameraChanged={handleCameraChange}
        >
            <Marker
                position={center}
                draggable={false}
            />
        </MapComponent>
    );
};

export { Map };
