import styles from './Location.module.css'
import {useWeather} from "../../contexts/Weather/Weather.ts";
import SearchBar from "../SearchBar/SearchBar.tsx";
import {useSearchParams} from "react-router";

const getTemperatureColor = (temp: number) => {
    switch (true) {
        case temp >= 30:
            return '#ff0000'
        case temp >= 20:
            return '#ffa500'
        case temp >= 10:
            return '#ffff00'
        case temp > 0:
            return '#fdfd8c'
        case temp === 0:
            return '#fff'
        case temp <= -30:
            return '#5400ff'
        case temp <= -20:
            return '#0000ff'
        case temp <= -10:
            return '#1e90ff'
        case temp < 0:
            return '#83d6fa'
        default:
            return '#fff'
    }
}

const Location = () => {
    const {setLocation, locationInfo, current} = useWeather();
    const [searchParams] = useSearchParams()
    const userLocation = localStorage.getItem("userLocation") || ''

    return (
        <section className={styles.box}>
            <SearchBar
                setValue={setLocation}
                placeholder={'Search for city'}
            />
            <div className={styles.location}>
                <p className={styles['location__name']}>{locationInfo.name}</p>
                <p className={styles['location__region']}>{locationInfo.region + ', ' + locationInfo.country}</p>
            </div>
            <div className={styles.condition}>
                <div
                    className={styles['condition__main']}
                    style={{
                        borderBottom: `2px solid ${getTemperatureColor(Math.round(current.temp_c))}`
                    }}
                >
                    <img className={styles['condition__icon']} src={'http:' + current.condition.icon} alt={current.condition.text}/>
                    <p className={styles['condition__temperature']}>
                        {Math.round(current.temp_c)}
                        <sup className={styles.celsius}>°C</sup>
                    </p>
                </div>
                <p className={styles.condition__text}>{current.condition.text}</p>
            </div>
            {searchParams.get('location') !== userLocation && (
                <div className={styles['reset-box']}>
                    <button
                        className={styles.reset}
                        onClick={() => setLocation(userLocation)}
                    >
                        reset to my location
                    </button>
                </div>
            )}
        </section>
    );
};

export default Location;