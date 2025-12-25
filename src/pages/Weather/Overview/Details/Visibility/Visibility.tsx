import styles from './Visibility.module.css'
import {useWeather} from "../../../../../contexts/Weather/Weather.ts";

const Visibility = () => {
    const {current} = useWeather()

    return (
        <div className={styles['box']}>
            <span className={styles.visibility}>{`${current.vis_km} km`}</span>
        </div>
    );
};

export default Visibility;