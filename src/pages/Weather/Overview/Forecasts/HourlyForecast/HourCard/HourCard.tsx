import React from "react";
import styles from './HourCard.module.css'
import Temperature from "../../../../../../components/ui/Temperature/Temperature.tsx";

export type HourCardProps = {
    time: string;
    isNow?: boolean;
    displayValue: number | string;
    children: React.ReactNode;
}

const HourCard = ({time, isNow = false, displayValue, children}: HourCardProps) => {
    const cardClasses: string = [
        styles.box,
        isNow && styles.now
    ].join(' ')

    return (
        <div className={cardClasses}>
            <time className={styles.time}>{isNow ? 'Now' : time}</time>
            <div className={styles['children-box']}>
                {children}
            </div>
            {
                typeof displayValue === 'number' ?
                    <Temperature
                        temperature={Math.round(displayValue)}
                        tempClass={styles.value}
                    /> :
                    <p className={styles.value}>{displayValue}</p>
            }
        </div>
    );
};

export default HourCard;