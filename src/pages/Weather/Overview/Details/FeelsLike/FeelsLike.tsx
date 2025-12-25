import styles from './FeelsLike.module.css'
import {useWeather} from "../../../../../contexts/Weather/Weather.ts";
import Temperature from "../../../../../components/ui/Temperature/Temperature.tsx";

const FeelsLike = () => {
    const {current} = useWeather()

    return (
        <div className={styles.box}>
            <Temperature
                temperature={Math.round(current.feelslike_c)}
                tempClass={styles.feelslike}
            />
            <div className={styles.description}>
                <p className={styles.actual}>Actual:{' '}
                    <Temperature
                        temperature={Math.round(current.temp_c)}
                    />
                </p>
                <p className={styles.windchill}>Considering wind:{' '}
                    <Temperature
                        temperature={Math.round(current.windchill_c)}
                    />
                </p>
            </div>
        </div>
    );
};

export default FeelsLike;