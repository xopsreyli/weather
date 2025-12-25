import styles from './Humidity.module.css'
import {useWeather} from "../../../../../contexts/Weather/Weather.ts";

const Humidity = () => {
    const {current} = useWeather();

    return (
        <div className={styles.box}>
            <span className={styles.humidity}>{`${current.humidity}%`}</span>
        </div>
    );
};

export default Humidity;