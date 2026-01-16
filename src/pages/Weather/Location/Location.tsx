import styles from './Location.module.css'
import {useWeather} from "../../../contexts/Weather/Weather.ts";
import SearchBar from "../../../components/ui/SearchBar/SearchBar.tsx";
import {useSearchParams} from "react-router";
import ScrollBox from "../../../components/ui/ScrollBox/ScrollBox.tsx";
import {axes} from "../../../enums/axes/axes.ts";
import {getTemperatureColor} from "../../../utils/temperatureColors/tempteratureColors.ts";
import Temperature from "../../../components/ui/Temperature/Temperature.tsx";
import Arrow from "../../../components/icons/Arrow/Arrow.tsx";
import Divider from "../../../components/ui/Divider/Divider.tsx";
import Header from "./Header/Header.tsx";
import Settings from "./Settings/Settings.tsx";
import {useState} from "react";
import {useSettings} from "../../../contexts/Settings/Settings.ts";

const Location = () => {
    const {location, setLocation, locationInfo, current, forecast} = useWeather();
    const {isCelsius} = useSettings()
    const [searchParams] = useSearchParams()
    const [isSettingsOpened, setIsSettingsOpened] = useState<boolean>(false)
    const userLocation = localStorage.getItem("userLocation") || ''


    const toggleSettings = () => {
        setIsSettingsOpened(v => !v)
    }

    const currentTemperature = isCelsius ? current?.temp_c : current?.temp_f
    const minTemperature = isCelsius ? forecast?.forecastday[0].day.mintemp_c : forecast?.forecastday[0].day.mintemp_f
    const maxTemperature = isCelsius ? forecast?.forecastday[0].day.maxtemp_c : forecast?.forecastday[0].day.maxtemp_f

    return (
        <div className={styles.box}>
            <ScrollBox axis={axes.Y}>
                <div className={styles.wrapper}>
                    <Header
                        toggleMenu={toggleSettings}
                    />
                    <Settings
                        isOpen={isSettingsOpened}
                    />
                    <div className={styles.content}>
                        <SearchBar
                            setValue={setLocation}
                            placeholder={'Search for city'}
                        />
                        {location && (
                            <>
                                <div className={styles.location}>
                                    <p className={styles['location__name']}>{locationInfo.name}</p>
                                    <p className={styles['location__region']}>{
                                        locationInfo.region ?
                                            `${locationInfo.region}, ${locationInfo.country}` :
                                            locationInfo.country
                                    }</p>
                                </div>
                                <div className={styles.condition}>
                                    <div
                                        className={styles['condition__main']}
                                        style={{
                                            borderBottom: `2px solid ${getTemperatureColor(Math.round(currentTemperature), isCelsius)}`,
                                        }}
                                    >
                                        <img className={styles['condition__icon']} src={current.condition.icon}
                                             alt={current.condition.text}/>
                                        <Temperature
                                            temperature={Math.round(currentTemperature)}
                                            tempClass={styles['condition__temperature']}
                                        />
                                    </div>
                                    <p className={styles.condition__text}>{current.condition.text}</p>
                                    <div className={styles['condition__min-max']}>
                                        <div className={styles['min-max']}>
                                            <Arrow className={[styles['min-max__arrow'], styles['min-max__arrow--down']].join(' ')} />
                                            <Temperature
                                                tempClass={styles['min-max__temperature']}
                                                temperature={Math.round(minTemperature)}
                                            />
                                        </div>
                                        <Divider />
                                        <div className={styles['min-max']}>
                                            <Temperature
                                                tempClass={styles['min-max__temperature']}
                                                temperature={Math.round(maxTemperature)}
                                            />
                                            <Arrow className={styles['min-max__arrow']} />
                                        </div>
                                    </div>
                                </div>
                                {(userLocation && searchParams.get('location') !== userLocation) && (
                                    <div className={styles['reset-box']}>
                                        <button
                                            className={styles.reset}
                                            onClick={() => setLocation(userLocation)}
                                        >
                                            reset to my location
                                        </button>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </ScrollBox>
        </div>
    );
};

export default Location;