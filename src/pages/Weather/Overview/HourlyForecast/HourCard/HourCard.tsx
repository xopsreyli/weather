import styles from './HourCard.module.css'
import Temperature from "../../../../../components/ui/Temperature/Temperature.tsx";

type HourForecastCardProps = {
    dateTime: string;
    isNow?: boolean;
    iconLink: string;
    temperature: number;
}

const HourCard = ({dateTime, isNow = false, iconLink, temperature}: HourForecastCardProps) => {
    const hours: string = dateTime.split(' ')[1].split(':')[0]

    return (
        <div className={styles.box}>
            <time>{isNow ? 'Now' : hours}</time>
            <img src={iconLink} alt="weather icon"/>
            <Temperature
                temperature={Math.round(temperature)}
            />
        </div>
    );
};

export default HourCard;