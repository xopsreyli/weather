import styles from './Wind.module.css'
import {useWeather} from "../../../../../contexts/Weather/Weather.ts";
import Divider from "../../../../../components/ui/Divider/Divider.tsx";
import Card from "./Card/Card.tsx";
import Compass from "../../../../../components/ui/Compass/Compass.tsx";
import {useSettings} from "../../../../../contexts/Settings/Settings.ts";

const Wind = () => {
    const {current} = useWeather()
    const {isKilometers} = useSettings()

    const wind: number = isKilometers ? current.wind_kph : current.wind_mph
    const gust: number = isKilometers ? current.gust_kph : current.gust_mph
    const units: string = isKilometers ? 'km/h' : 'mi/h'

    return (
        <div className={styles.box}>
            <div className={styles.info}>
                <Card
                    name={'wind'}
                    value={`${Math.round(wind)} ${units}`}
                />
                <Divider isVertical={false} />
                <Card
                    name={'gust'}
                    value={`${Math.round(gust)} ${units}`}
                />
                <Divider isVertical={false} />
                <Card
                    name={'direction'}
                    value={`${current.wind_degree}°, ${current.wind_dir}`}
                />
            </div>
            <div className={styles['compass-box']}>
                <Compass degrees={current.wind_degree} />
            </div>
        </div>
    );
};

export default Wind;