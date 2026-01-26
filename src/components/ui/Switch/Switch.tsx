import styles from './Switch.module.css'
import {type ChangeEvent} from "react";

type SwitchProps = {
    id: string;
    checked: boolean,
    onSwitch: (e: ChangeEvent<HTMLInputElement>) => void,
}

const Switch = ({id, checked, onSwitch}: SwitchProps) => {
    const classes: string = [
        styles.switch,
        checked && styles['switch--enabled'],
    ].join(' ')

    return (
        <label
            className={classes}
            htmlFor={id}
        >
            <input
                type="checkbox"
                id={id}
                checked={checked}
                onChange={onSwitch}
            />
        </label>
    );
};

export default Switch;