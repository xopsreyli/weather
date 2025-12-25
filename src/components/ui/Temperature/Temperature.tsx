import styles from './Temperature.module.css'

type TemperatureType = {
    temperature: number,
    tempClass?: string,
}

const Temperature = ({temperature, tempClass}: TemperatureType) => {
    return (
        <span className={tempClass}>
            {temperature}
            <sup className={styles.unit}>°C</sup>
        </span>
    );
};

export default Temperature;