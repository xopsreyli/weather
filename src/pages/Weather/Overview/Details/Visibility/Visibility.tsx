import styles from './Visibility.module.css'
import {useWeather} from "../../../../../contexts/Weather/Weather.ts";
import {useSettings} from "../../../../../contexts/Settings/Settings.ts";

const Visibility = () => {
    const {current} = useWeather()
    const {isKilometers} = useSettings()

    const visibility: number = isKilometers ? current.vis_km : current.vis_miles
    const units: string = isKilometers ? 'km' : 'mi'

    return (
        <div className={styles['box']}>
            <span className={styles.visibility}>{`${visibility} ${units}`}</span>
        </div>
    );
};

export default Visibility;