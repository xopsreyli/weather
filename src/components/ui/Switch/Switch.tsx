import styles from './Switch.module.css'
import {useState} from "react";

type SwitchProps = {
    isEnabled?: boolean,
    onSwitch?: () => void,
}

const Switch = ({isEnabled = false, onSwitch = () => {}}: SwitchProps) => {
    const [enabled, setEnabled] = useState<boolean>(isEnabled)

    const toggle = () => {
        setEnabled(v => !v)
        onSwitch()
    }

    const classes: string = [
        styles.switch,
        enabled && styles['switch--enabled'],
    ].join(' ')

    return (
        <button
            className={classes}
            onClick={toggle}
        ></button>
    );
};

export default Switch;