import styles from './DayCard.module.css'
import {colors, getTemperatureColor} from "../../../../../../utils/temperatureColors/tempteratureColors.ts";
import Temperature from "../../../../../../components/ui/Temperature/Temperature.tsx";
import {WEEK_DAYS_ABV} from "../../../../../../enums/weekDays/weekDays.ts";
import Indicator from "../../../../../../components/ui/Indicator/Indicator.tsx";
import {useSettings} from "../../../../../../contexts/Settings/Settings.ts";

type DayCardType = {
    epoch: number,
    isToday?: boolean,
    iconLink: string,
    min: number,
    max: number,
    currentTemp?: number,
    allDaysMin: number,
    allDaysMax: number,
}

const DayCard = ({
                     epoch,
                     isToday = false,
                     iconLink,
                     min,
                     max,
                     currentTemp,
                     allDaysMin,
                     allDaysMax
                 }: DayCardType) => {
    const {isCelsius} = useSettings()

    const date: Date = new Date(epoch * 1000)
    const dayOfWeek: string = WEEK_DAYS_ABV[date.getDay()]

    const minColor: string = getTemperatureColor(min, isCelsius)
    const maxColor: string = getTemperatureColor(max, isCelsius)
    const indicatorColors: string[] = colors.slice(colors.indexOf(minColor), colors.indexOf(maxColor) + 1)
    const indicatorWidth: number = (max - min) / (allDaysMax - allDaysMin) * 100
    const indicatorLeft: number = (min - allDaysMin) / (allDaysMax - allDaysMin) * 100

    const cardClasses: string = [
        styles.box,
        isToday && styles.today,
    ].join(' ')

    return (
        <div className={cardClasses}>
            <time className={styles.day}>{isToday ? 'Today' : dayOfWeek}</time>
            <img className={styles.icon} src={iconLink} alt="weather icon"/>
            <Temperature
                temperature={Math.round(min)}
                tempClass={styles.temperature}
            />
            <div className={styles['indicator-track']}>
                <div
                    className={styles['indicator-box']}
                    style={{
                        width: `${indicatorWidth}%`,
                        left: `${indicatorLeft}%`,
                    }}
                >
                    <Indicator
                        colors={indicatorColors}
                        {...(isToday && {
                            min:min,
                            max:max,
                            current:currentTemp
                        })}
                    />
                </div>
            </div>
            <Temperature
                temperature={Math.round(max)}
                tempClass={styles.temperature}
            />
        </div>
    );
};

export default DayCard;