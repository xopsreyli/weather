import styles from './Indicator.module.css'

type IndicatorProps = {
    colors: string[],
    min?: number,
    max?: number,
    current?: number,
}

const Indicator = ({colors, min, max, current}: IndicatorProps) => {
    let currentLeft: number = 0
    if (current !== undefined && min !== undefined && max !== undefined) {
        currentLeft = (current - min) / (max - min) * 100
        currentLeft = Math.min(Math.max(currentLeft, 0), 100)
    }

    return (
        <div
            className={styles.indicator}
            style={{
                background: `linear-gradient(to right, ${colors.join(', ')})`,
            }}
        >
            {current !== undefined &&
                <div
                    className={styles.current}
                    style={{
                        left: `${currentLeft}%`,
                    }}
                ></div>
            }
        </div>
    );
};

export default Indicator;