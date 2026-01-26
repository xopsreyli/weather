import styles from './Compass.module.css'
import {CD_SHORT} from "../../../enums/cardinalDirections/cardinalDirections.ts";

type CompassProps = {
    degrees: number,
}

const Compass = ({degrees}: CompassProps) => {
    return (
        <div className={styles.box}>
            <div className={styles.compass}>
                <div
                    className={styles['arrow-box']}
                    style={{
                        rotate: `${degrees - 180}deg`,
                    }}
                >
                    <div
                        className={[
                            styles.arrow,
                            styles['arrow--up']
                        ].join(' ')}
                    ></div>
                    <div
                        className={[
                            styles.arrow,
                            styles['arrow--down']
                        ].join(' ')}
                    ></div>
                </div>
                <span
                    className={[
                        styles.direction,
                        styles['direction--N'],
                    ].join(' ')}
                >{CD_SHORT.north}</span>
                <span
                    className={[
                        styles.direction,
                        styles['direction--S'],
                    ].join(' ')}
                >{CD_SHORT.south}</span>
                <span
                    className={[
                        styles.direction,
                        styles['direction--W'],
                    ].join(' ')}
                >{CD_SHORT.west}</span>
                <span
                    className={[
                        styles.direction,
                        styles['direction--E'],
                    ].join(' ')}
                >{CD_SHORT.east}</span>
                <span
                    className={[
                        styles['mixed-direction'],
                        styles['mixed-direction--NW'],
                    ].join(' ')}
                >{CD_SHORT.north + CD_SHORT.west}</span>
                <span
                    className={[
                        styles['mixed-direction'],
                        styles['mixed-direction--NE'],
                    ].join(' ')}
                >{CD_SHORT.north + CD_SHORT.east}</span>
                <span
                    className={[
                        styles['mixed-direction'],
                        styles['mixed-direction--SW'],
                    ].join(' ')}
                >{CD_SHORT.south + CD_SHORT.west}</span>
                <span
                    className={[
                        styles['mixed-direction'],
                        styles['mixed-direction--SE'],
                    ].join(' ')}
                >{CD_SHORT.south + CD_SHORT.east}</span>
            </div>
        </div>
    );
};

export default Compass;