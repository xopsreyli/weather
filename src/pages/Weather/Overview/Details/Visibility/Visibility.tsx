import styles from './Visibility.module.css'
import {useWeather} from "../../../../../contexts/Weather/Weather.ts";
import CardTitle from "../../../../../components/ui/CardTitle/CardTitle.tsx";
import Eye from "../../../../../components/icons/Eye/Eye.tsx";

const Visibility = () => {
    const {current} = useWeather()

    return (
        <>
            <CardTitle
                icon={<Eye customClass={styles['title__icon']} />}
                title={'visibility'}
            />
            <div className={styles['visibility-box']}>
                <span className={styles.visibility}>{`${current.vis_km} km`}</span>
            </div>
        </>
    );
};

export default Visibility;