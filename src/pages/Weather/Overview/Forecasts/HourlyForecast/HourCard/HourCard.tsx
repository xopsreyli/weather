import styles from './HourCard.module.css'
import Temperature from "../../../../../../components/ui/Temperature/Temperature.tsx";

type HourForecastCardProps = {
    dateTime: string;
    isNow?: boolean;
    iconLink: string;
    temperature: number;
}

const HourCard = ({dateTime, isNow = false, iconLink, temperature}: HourForecastCardProps) => {
    const hours: string = dateTime.split(' ')[1].split(':')[0]
    const cardClasses: string = [
        styles.box,
        isNow && styles.now
    ].join(' ')

    return (
        <div className={cardClasses}>
            <time className={styles.hours}>{isNow ? 'Now' : hours}</time>
            <img className={styles.icon} src={iconLink} alt="weather icon"/>
            <Temperature
                temperature={Math.round(temperature)}
                tempClass={styles.temperature}
                badgeClass={styles['temperature--badge']}
            />
        </div>
    );
};

export default HourCard;