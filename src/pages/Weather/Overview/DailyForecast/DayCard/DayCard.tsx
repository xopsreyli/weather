import styles from './DayCard.module.css'
import {colors, getTemperatureColor} from "../../../../../utils/temperatureColors/tempteratureColors.ts";
import Temperature from "../../../../../components/ui/Temperature/Temperature.tsx";
import {WEEK_DAYS_ABV} from "../../../../../enums/weekDays/weekDays.ts";

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
    const date: Date = new Date(epoch * 1000)
    const dayOfWeek = WEEK_DAYS_ABV[date.getDay()]

    const minColor: string = getTemperatureColor(min)
    const maxColor: string = getTemperatureColor(max)
    const indicatorColors: string[] = colors.slice(colors.indexOf(minColor), colors.indexOf(maxColor) + 1)
    const indicatorWidth: number = (max - min) / (allDaysMax - allDaysMin) * 100
    const indicatorLeft: number = (min - allDaysMin) / (allDaysMax - allDaysMin) * 100

    let currentLeft: number = 0
    if (currentTemp) {
        currentLeft = (currentTemp - allDaysMin) / (allDaysMax - allDaysMin) * 100
        currentLeft = Math.min(Math.max(currentLeft, 0), 100)
    }

    return (
        <div className={styles.box}>
            <time>{isToday ? 'Today' : dayOfWeek}</time>
            <img className={styles.icon} src={iconLink} alt="weather icon"/>
            <Temperature
                temperature={Math.round(min)}
            />
            <div className={styles['indicator-box']}>
                <div
                    className={styles.indicator}
                    style={{
                        width: `${indicatorWidth}%`,
                        left: `${indicatorLeft}%`,
                        background: `linear-gradient(to right, ${indicatorColors.join(', ')})`,
                    }}
                >
                </div>
                {currentTemp &&
                    <div
                        className={styles['indicator--current']}
                        style={{
                            left: `${currentLeft}%`,
                        }}
                    ></div>
                }
            </div>
            <Temperature
                temperature={Math.round(max)}
            />
        </div>
    );
};

export default DayCard;