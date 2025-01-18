import { useCallback, useEffect, useState } from "react";
import { Input } from "@/ui/components/input";
import { useGeolocation } from "@/lib/hooks/use-geo-location";

export default function MapTest({ MapComponent, Marker, address, center, handleCameraChange, customIcon, DEFAULT_CENTER }: { MapComponent: any, Marker: any, address: any, center: any, handleCameraChange: any, customIcon: any, DEFAULT_CENTER: any }) {
    return (
        <>

            {address.place_id && address.positionOnMap.lat && address.positionOnMap.lng && (
                <>
                    <div className="">
                        <h2 className="text-xl font-bold">Is the pin in the right place?</h2>
                        <p className="text-sm text-muted-foreground">If not, you can drag it to the correct location</p>
                    </div>
                    <MapComponent
                        className="rounded-lg w-full h-[320px] overflow-hidden"
                        // style={{ width: '100%', height: '100%' }}
                        defaultCenter={DEFAULT_CENTER}
                        center={center}
                        defaultZoom={12}
                        gestureHandling={'greedy'}
                        disableDefaultUI={true}
                        onCameraChanged={handleCameraChange}
                    >
                        <Marker
                            icon={customIcon}
                            position={center}
                            draggable={false}
                        />
                    </MapComponent>
                </>
            )
            }
        </>
    )
}