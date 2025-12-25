import styles from './CloudCoverage.module.css'
import {useWeather} from "../../../../../contexts/Weather/Weather.ts";
import Cloud from "../../../../../components/icons/Cloud/Cloud.tsx";

const CloudCoverage = () => {
    const {current} = useWeather()

    return (
        <div className={styles.box}>
            <Cloud customClass={styles.icon}/>
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