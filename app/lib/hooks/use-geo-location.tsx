import { useState, useEffect } from 'react';

interface LocationState {
    lat: number;
    lng: number;
    error: string | null;
    loading: boolean;
}

export const useGeolocation = () => {
    const [location, setLocation] = useState<LocationState>({
        lat: 30.042617388660606, // Egypt Cairo
        lng: 31.23340646299468, // Egypt Cairo
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
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
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

