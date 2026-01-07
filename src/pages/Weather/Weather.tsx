import styles from './Weather.module.css'
import Location from './Location/Location.tsx'
import Loading from "../../components/ui/Loading/Loading.tsx";
import WeatherProvider from "../../contexts/Weather/WeatherProvider.tsx";
import {useWeather} from "../../contexts/Weather/Weather.ts";
import {useNavigate} from "react-router";
import Overview from "./Overview/Overview.tsx";
import Divider from "../../components/ui/Divider/Divider.tsx";

const Weather = () => {
    return (
        <WeatherProvider>
            <div className={styles.page}>
                <WeatherContent />
            </div>
        </WeatherProvider>
    )
}

const WeatherContent = () => {
    const {location, isPending, isError, error} = useWeather();
    const navigate = useNavigate()

    if (isPending && location) {
        return (
            <div className={styles.box}>
                <Loading/>
            </div>
        )
    }

    if (isError && error) {
        return (
            <div className={styles.box}>
                <div className={styles.error}>
                    <p className={styles['error__message']}>{error.message}</p>
                    <button
                        className={styles['error__back-btn']}
                        onClick={() => navigate(-1)}
                    >Go back</button>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.box}>
            <Location/>
            <Divider />
            <Overview/>
        </div>
    );
}

export default Weather;