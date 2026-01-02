import styles from './CloudCoverage.module.css'
import {useWeather} from "../../../../../contexts/Weather/Weather.ts";
import Clouds from "../../../../../components/icons/Clouds/Clouds.tsx";

const CloudCoverage = () => {
    const {current} = useWeather()

    return (
        <div className={styles.box}>
            <Clouds className={styles.icon}/>
            <span
                className={[
                    styles.percentage,
                    styles['percentage--back'],
                ].join(' ')}
            >{current.cloud}</span>
            <span
                className={[
                    styles.percentage,
                    styles['percentage--front'],
                ].join(' ')}
            >{current.cloud}</span>
        </div>
    );
};

export default CloudCoverage;