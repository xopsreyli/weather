import styles from './Location.module.css'
import {useWeather} from "../../../contexts/Weather/Weather.ts";
import SearchBar from "../../../components/ui/SearchBar/SearchBar.tsx";
import {useSearchParams} from "react-router";
import ScrollBox from "../../../components/ui/ScrollBox/ScrollBox.tsx";
import {axes} from "../../../enums/axes/axes.ts";
import {getTemperatureColor} from "../../../utils/temperatureColors/tempteratureColors.ts";
import Temperature from "../../../components/ui/Temperature/Temperature.tsx";

const Location = () => {
    const {setLocation, locationInfo, current} = useWeather();
    const [searchParams] = useSearchParams()
    const userLocation = localStorage.getItem("userLocation") || ''

    return (
        <div className={styles.box}>
            <ScrollBox axis={axes.Y}>
                <div className={styles.content}>
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
                            <img className={styles['condition__icon']} src={current.condition.icon}
                                 alt={current.condition.text}/>
                            <Temperature
                                temperature={Math.round(current.temp_c)}
                                tempClass={styles['condition__temperature']}
                                badgeClass={styles.celsius}
                            />
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
                </div>
            </ScrollBox>
        </div>
    );
};

export default Location;