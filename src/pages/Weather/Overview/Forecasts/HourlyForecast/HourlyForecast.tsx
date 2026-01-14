import styles from './HourlyForecast.module.css'
import ScrollBox from "../../../../../components/ui/ScrollBox/ScrollBox.tsx";
import {axes} from "../../../../../enums/axes/axes.ts";
import {useWeather} from "../../../../../contexts/Weather/Weather.ts";
import HourCard from "./HourCard/HourCard.tsx";
import Sun from "../../../../../components/icons/Sun/Sun.tsx";
import type {ReactElement} from "react";
import type {HourCardProps} from "./HourCard/HourCard.tsx";
import {convertTimeTo24Format} from "../../../../../utils/time/time.ts";
import {useSettings} from "../../../../../contexts/Settings/Settings.ts";

const getValidSunTimings = (today: string, tomorrow: string, currentHours: number) => {
    const todaySunTimings = convertTimeTo24Format(today)
    const hours = Number(todaySunTimings.split(':')[0])

    if (hours < currentHours) {
        return tomorrow
    }

    return today
}

const insertSunCard = (suntime: string, displayValue: string, style: string, cards: ReactElement<HourCardProps>[]) => {
    const time24: string = convertTimeTo24Format(suntime)
    const hours: string = time24.split(':')[0]

    const indexOfSameHoursCard = cards.findIndex((card: ReactElement<HourCardProps>) => card.props.time === hours)
    cards.splice(
        indexOfSameHoursCard + 1,
        0,
        (
            <HourCard
                key={suntime}
                time={time24}
                displayValue={displayValue}
            >
                <div className={styles['card__sun-box']}>
                    <Sun className={[styles['card__sun'], style].join(' ')} />
                </div>
            </HourCard>
        )
    )
}

const HourlyForecast = () => {
    const {locationInfo, forecast} = useWeather()
    const {isCelsius} = useSettings()

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

    const renderItems: ReactElement<HourCardProps>[] = forecastHours.map((hour, i) => {
        const hours: string = hour.time.split(' ')[1].split(':')[0]

        const temperature = isCelsius ? hour.temp_c : hour.temp_f

        return <HourCard
            key={hour.time_epoch}
            time={hours}
            displayValue={temperature}
            {...(i === 0 && {isNow: true})}
        >
            <img className={styles['card__icon']} src={hour.condition.icon} alt="weather icon"/>
        </HourCard>
    })

    const sunrise: string = getValidSunTimings(
        forecast.forecastday[0].astro.sunrise,
        forecast.forecastday[1].astro.sunrise,
        hoursAtLocation
    )
    const sunset: string = getValidSunTimings(
        forecast.forecastday[0].astro.sunset,
        forecast.forecastday[1].astro.sunset,
        hoursAtLocation
    )

    insertSunCard(sunrise, 'Sunrise', styles.sunrise, renderItems)
    insertSunCard(sunset, 'Sunset', styles.sunset, renderItems)

    return (
        <ScrollBox axis={axes.X}>
            <div className={styles.box}>
                {renderItems}
            </div>
        </ScrollBox>
    );
};

export default HourlyForecast;

