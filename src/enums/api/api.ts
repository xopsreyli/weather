type ApiConfig = {
    readonly URL: string;
    readonly KEY: string;
}

export const WEATHER_API : ApiConfig = {
    URL: import.meta.env.VITE_WEATHER_API_URL,
    KEY: import.meta.env.VITE_WEATHER_API_KEY,
}
