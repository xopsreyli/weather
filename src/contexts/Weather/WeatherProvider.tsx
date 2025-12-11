import {WeatherContext, type WeatherContextType} from "./Weather.ts";
import {type ReactNode, useEffect, useMemo} from "react";
import useUrlSyncState from "../../hooks/useUrlSyncState/useUrlSyncState.ts";
import {useQuery} from "@tanstack/react-query";
import {WEATHER_API} from "../../enums/api/api.ts";

type WeatherProviderProps = {
    children: ReactNode;
}

const WeatherProvider = ({children}: WeatherProviderProps) => {
    const [location, setLocation] = useUrlSyncState(
        'location',
        '',
        (v) => v,
        (v) => v
    )
    const {isPending, isError, data, error} = useQuery({
        queryKey: ['Weather', location],
        queryFn: async () => {
            const response = await fetch(
                WEATHER_API.URL +
                "/current.json" +
                `?key=${WEATHER_API.KEY}&q=${location}`
            )

            if (!response.ok) {
                throw new Error(`Failed to fetch: ${response.status}`);
            }

            return await response.json()
        },
        enabled: !!location,
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 5,
        placeholderData: (previousData) => previousData,
    })

    useEffect(() => {
        if (!location) {
            window.navigator.geolocation.getCurrentPosition((position) => {
                const currentCoords = `${position.coords.latitude},${position.coords.longitude}`
                setLocation(currentCoords)
                localStorage.setItem('userLocation', currentCoords)
            })
        }
    }, [location, setLocation])

    const weatherContextValue: WeatherContextType = useMemo(() => ({
        location: location,
        setLocation: setLocation,
        locationInfo: data?.location,
        current: data?.current,
        isPending: isPending,
        isError: isError,
        error: error,
    }), [data, isPending, isError, error, location, setLocation])

    return (
        <WeatherContext value={weatherContextValue}>
            {children}
        </WeatherContext>
    );
};

export default WeatherProvider;