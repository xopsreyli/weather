import styles from './FeelsLike.module.css'
import {useWeather} from "../../../../../contexts/Weather/Weather.ts";
import Temperature from "../../../../../components/ui/Temperature/Temperature.tsx";
import Arrow from "../../../../../components/icons/Arrow/Arrow.tsx";

const FeelsLike = () => {
    const {current} = useWeather()

    const feelslike: number = Math.round(current.feelslike_c)
    const temp: number = Math.round(current.temp_c)
    const windchill: number = Math.round(current.windchill_c)

    const difference: number = feelslike - temp

    const differenceClasses: string = [
        styles['difference-box'],
        difference === 0 && styles['difference--none'],
        difference > 0 && styles['difference--hotter'],
        difference < 0 && styles['difference--colder'],
    ].filter(Boolean).join(' ')

    return (
        <div className={styles.box}>
            <Temperature
                temperature={feelslike}
                tempClass={styles.feelslike}
            />
            <div className={differenceClasses}>
                <hr className={styles['difference__track']}/>
                <div className={styles.difference}>
                    <Arrow className={styles['difference__icon']} />
                    <Temperature
                        tempClass={styles['difference__temperature']}
                        temperature={Math.abs(difference)}
                    />
                </div>
            </div>
            <div className={styles.description}>
                <p className={styles.actual}>Actual:{' '}
                    <Temperature
                        temperature={temp}
                    />
                </p>
                <p className={styles.windchill}>Considering wind:{' '}
                    <Temperature
                        temperature={windchill}
                    />
                </p>
            </div>
        </div>
    );
};

export default FeelsLike;