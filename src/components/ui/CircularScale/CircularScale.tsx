import styles from './CircularScale.module.css'
import Arrow from "../../icons/Arrow/Arrow.tsx";

type RoundScaleProps = {
    tickEveryDegrees: number,
    min: number,
    max: number,
    current: number,
    measurementUnit: string,
}

const CircularScale = ({tickEveryDegrees, min, max, current, measurementUnit}: RoundScaleProps) => {
    const ticksDegrees: number[] = []

    for (let i = 0; i < 360; i += tickEveryDegrees) {
        if (i >= 135 && i <= 225) continue
        ticksDegrees.push(i)
    }

    const validCurrent = Math.min(Math.max(current, min), max)
    const indicatorRotate = (validCurrent - min) / (max - min) * 270

    return (
        <div className={styles.box}>
            {ticksDegrees.map((tickDegree) => (
                <div
                    key={tickDegree}
                    className={styles.tick}
                    style={{ rotate: `${tickDegree}deg` }}
                ></div>
            ))}
            <div
                className={styles['indicator-box']}
                style={{ rotate: `${225 + indicatorRotate}deg` }}
            >
                <div className={styles.indicator}></div>
            </div>
            <span className={styles.value}>{current}</span>
            <span className={styles.measurement}>{measurementUnit}</span>
            <Arrow customClass={[styles.arrow, styles['arrow--up']].join(' ')} />
            <Arrow customClass={[styles.arrow, styles['arrow--down']].join(' ')} />
        </div>
    );
};

export default CircularScale;