import React, {useEffect, useRef} from "react";
import styles from './ScrollBox.module.css';
import {type Axis, axes} from '../../../enums/axes/axes.ts'

type ScrollYBoxProps = {
    axis: Axis;
    children: React.ReactNode;
}

const ScrollBox = ({axis, children}: ScrollYBoxProps) => {
    const scrollBox = useRef<HTMLDivElement | null>(null);
    
    useEffect(() => {
        const el = scrollBox.current;

        if (axis !== axes.X || !el) return

        const onWheelScroll = (e: WheelEvent) => {
            e.preventDefault();
            const scrollByValue = e.deltaY

            el.scrollBy({
                left: scrollByValue,
                behavior: 'smooth',
            })
        }

        el.addEventListener('wheel', onWheelScroll, {passive: false})

        return () => {
            el.removeEventListener('wheel', onWheelScroll);
        }
    }, [axis]);

    const boxStyles = [
        styles['scroll-box'],
        styles[`axis-${axis}`],
    ].join(' ')

    return (
        <div
            className={boxStyles}
            ref={scrollBox}
        >
            {children}
        </div>
    );
};

export default ScrollBox;