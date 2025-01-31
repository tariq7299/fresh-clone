import { useState, useEffect } from 'react';

interface LocationState {
    defaultLat: number;
    defaultLng: number;
    error: string | null;
    loading: boolean;
}

export const useGeolocation = () => {
    const [location, setLocation] = useState<LocationState>({
        defaultLat: 30.042617388660606, // Egypt Cairo
        defaultLng: 31.23340646299468, // Egypt Cairo
        error: null,
        loading: true
    });

    useEffect(() => {
        if (!navigator.geolocation) {
            setLocation(prev => ({
                ...prev,
                error: "Geolocation is not supported",
                loading: false
            }));
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLocation({
                    defaultLat: position.coords.latitude,
                    defaultLng: position.coords.longitude,
                    error: null,
                    loading: false
                });
            },
            (error) => {
                setLocation(prev => ({
                    ...prev,
                    error: error.message,
                    loading: false
                }));
            }
        );
    }, []);

    return location;
};

