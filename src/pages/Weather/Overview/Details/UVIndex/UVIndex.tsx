import styles from './UVIndex.module.css'
import {useWeather} from "../../../../../contexts/Weather/Weather.ts";
import {getUVColor, getUVLevel, getUVSuggestion} from "../../../../../utils/uv/uv.ts";
import Indicator from "../../../../../components/ui/Indicator/Indicator.tsx";
import {COLORS} from "../../../../../enums/uv/uv.ts";

const UvIndex = () => {
    const {current} = useWeather()

    return (
        <div className={styles.box}>
            <div className={styles['uv-box']}>
                <span className={styles.uv}>{Math.round(current.uv)}</span>
                <p
                    className={styles.level}
                    style={{
                        color: getUVColor(current.uv),
                    }}
                >{getUVLevel(current.uv)}</p>
            </div>
            <Indicator
                colors={Object.values(COLORS)}
                min={0}
                max={11}
                current={current.uv}
            />
            <p className={styles.suggestion}>{getUVSuggestion(current.uv)}</p>
        </div>
    );
};

export default UvIndex;