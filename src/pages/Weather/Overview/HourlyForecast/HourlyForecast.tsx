import styles from './HourlyForecast.module.css'
import ScrollBox from "../../../../components/ui/ScrollBox/ScrollBox.tsx";
import {axes} from "../../../../enums/axes/axes.ts";
import {useWeather} from "../../../../contexts/Weather/Weather.ts";
import HourCard from "./HourCard/HourCard.tsx";

const HourlyForecast = () => {
    const {locationInfo, forecast} = useWeather()

    const date: Date = new Date()
    const hoursAtLocation: number = Number(new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        hour12: false,
        timeZone: locationInfo.tz_id,
    }).format(date))

    const forecastHours = [
        ...forecast.forecastday[0].hour.slice(hoursAtLocation),
        ...forecast.forecastday[1].hour.slice(0, hoursAtLocation),
    ]

    return (
        <ScrollBox axis={axes.X}>
            <div className={styles.box}>
                {forecastHours.map((hour, i) =>
                    <HourCard
                        key={hour.time_epoch}
                        dateTime={hour.time}
                        iconLink={hour.condition.icon}
                        temperature={hour.temp_c}
                        {...(i === 0 && {isNow: true})}
                    />
                )}
            </div>
        </ScrollBox>
    );
};

export default HourlyForecast;

