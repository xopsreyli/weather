import styles from './Pressure.module.css'
import RoundScale from "../../../../../components/ui/CircularScale/CircularScale.tsx";
import {useWeather} from "../../../../../contexts/Weather/Weather.ts";

const Pressure = () => {
    const {current} = useWeather()

    return (
        <div className={styles.box}>
            <RoundScale
                tickEveryDegrees={5}
                min={870}
                max={1085}
                current={current.pressure_mb}
                measurementUnit={'hPa'}
            />
        </div>
    );
};

export default Pressure;