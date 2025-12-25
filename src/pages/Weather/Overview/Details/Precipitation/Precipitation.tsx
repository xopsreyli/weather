import styles from './Precipitation.module.css'
import {useWeather} from "../../../../../contexts/Weather/Weather.ts";

const Precipitation = () => {
    const {forecast} = useWeather()
    console.log(forecast)

    return (
        <div className={styles.box}>
            <span className={styles.precipitation}>{`${forecast.forecastday[0].day.totalprecip_mm} mm`}</span>
        </div>
    );
};

export default Precipitation;