import styles from './Pressure.module.css'
import CircularScale from "../../../../../components/ui/CircularScale/CircularScale.tsx";
import {useWeather} from "../../../../../contexts/Weather/Weather.ts";
import {useSettings} from "../../../../../contexts/Settings/Settings.ts";

const Pressure = () => {
    const {current} = useWeather()
    const {isPascal} = useSettings()

    const pressure: number = isPascal ? current.pressure_mb : current.pressure_in
    const units: string = isPascal ? 'hPa' : 'inHg'
    const min: number = isPascal ? 870 : 25.69
    const max: number = isPascal ? 1085 : 32.04

    return (
        <div className={styles.box}>
            <CircularScale
                tickEveryDegrees={5}
                min={min}
                max={max}
                current={pressure}
                measurementUnit={units}
            />
        </div>
    );
};

export default Pressure;