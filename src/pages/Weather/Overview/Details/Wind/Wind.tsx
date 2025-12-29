import styles from './Wind.module.css'
import {useWeather} from "../../../../../contexts/Weather/Weather.ts";
import Divider from "../../../../../components/ui/Divider/Divider.tsx";
import Card from "./Card/Card.tsx";
import Compass from "../../../../../components/ui/Compass/Compass.tsx";

const Wind = () => {
    const {current} = useWeather()

    return (
        <div className={styles.box}>
            <div className={styles.info}>
                <Card
                    name={'wind'}
                    value={`${Math.round(current.wind_kph)} k/h`}
                />
                <Divider isVertical={false} />
                <Card
                    name={'gust'}
                    value={`${Math.round(current.gust_kph)} k/h`}
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