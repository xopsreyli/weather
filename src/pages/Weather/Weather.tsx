import styles from './Weather.module.css'
import Location from '../../components/Location/Location.tsx'
import Info from "../../components/Info/Info.tsx";
import Loading from "../../components/Loading/Loading.tsx";
import WeatherProvider from "../../contexts/Weather/WeatherProvider.tsx";
import {useWeather} from "../../contexts/Weather/Weather.ts";
import {useNavigate} from "react-router";

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
    const {isPending, isError, error} = useWeather();
    const navigate = useNavigate()

    if (isPending) {
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
            <Info/>
        </div>
    );
}

export default Weather;