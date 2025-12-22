import styles from './Divider.module.css'

type DividerProps = {
    isVertical?: boolean
}

const Divider = ({isVertical = true}: DividerProps) => {
    const classNames: string = [
        styles.divider,
        isVertical ? styles.vertical : styles.horizontal,
    ].join(' ')

    return (
        <hr className={classNames} />
    );
};

export default Divider;