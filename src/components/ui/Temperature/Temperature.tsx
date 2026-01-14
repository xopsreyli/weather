import styles from './Temperature.module.css'
import {useSettings} from "../../../contexts/Settings/Settings.ts";

type TemperatureType = {
    temperature: number,
    tempClass?: string,
}

const Temperature = ({temperature, tempClass}: TemperatureType) => {
    const {isCelsius} = useSettings()

    return (
        <span className={tempClass}>
            {temperature}
            <sup className={styles.unit}>°{isCelsius ? 'C' : 'F'}</sup>
        </span>
    );
};

export default Temperature;