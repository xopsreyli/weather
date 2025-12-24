import styles from './DailyForecast.module.css'
import {useWeather} from "../../../../../contexts/Weather/Weather.ts";
import DayCard from "./DayCard/DayCard.tsx";

const DailyForecast = () => {
    const {current, forecast} = useWeather()

    const {allDaysMin, allDaysMax} = forecast.forecastday.reduce((acc, day) => ({
            allDaysMin: Math.min(acc.allDaysMin, day.day.mintemp_c),
            allDaysMax: Math.max(acc.allDaysMax, day.day.maxtemp_c)
        }),
        {
            allDaysMin: Infinity,
            allDaysMax: -Infinity,
        }
    )

    return (
        <div className={styles.box}>
            {forecast.forecastday.map((day, i) =>
                <DayCard
                    key={day.date_epoch}
                    epoch={day.date_epoch}
                    iconLink={day.day.condition.icon}
                    min={day.day.mintemp_c}
                    max={day.day.maxtemp_c}
                    allDaysMin={allDaysMin}
                    allDaysMax={allDaysMax}
                    {...(i === 0 && {
                        isToday: true,
                        currentTemp: current.temp_c
                    })}
                />
            )}
        </div>
    );
};

export default DailyForecast;