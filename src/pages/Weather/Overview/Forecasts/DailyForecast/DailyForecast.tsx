import styles from './DailyForecast.module.css'
import {useWeather} from "../../../../../contexts/Weather/Weather.ts";
import DayCard from "./DayCard/DayCard.tsx";
import {useSettings} from "../../../../../contexts/Settings/Settings.ts";

const DailyForecast = () => {
    const {current, forecast} = useWeather()
    const {isCelsius} = useSettings()

    const {allDaysMin, allDaysMax} = forecast.forecastday.reduce((acc, day) => {
        const min: number = isCelsius ? day.day.mintemp_c : day.day.mintemp_f
        const max: number = isCelsius ? day.day.maxtemp_c : day.day.maxtemp_f

        return {
            allDaysMin: Math.min(acc.allDaysMin, min),
            allDaysMax: Math.max(acc.allDaysMax, max)
        }},
        {
            allDaysMin: Infinity,
            allDaysMax: -Infinity,
        }
    )

    return (
        <div className={styles.box}>
            {forecast.forecastday.map((day, i) => {
                const min: number = isCelsius ? day.day.mintemp_c : day.day.mintemp_f
                const max: number = isCelsius ? day.day.maxtemp_c : day.day.maxtemp_f

                return (
                    <DayCard
                        key={day.date_epoch}
                        epoch={day.date_epoch}
                        iconLink={day.day.condition.icon}
                        min={min}
                        max={max}
                        allDaysMin={allDaysMin}
                        allDaysMax={allDaysMax}
                        {...(i === 0 && {
                            isToday: true,
                            currentTemp: current.temp_c
                        })}
                    />
                )
            })}
        </div>
    );
};

export default DailyForecast;