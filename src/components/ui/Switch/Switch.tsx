import styles from './Switch.module.css'
import {type ChangeEvent, useState} from "react";

type SwitchProps = {
    id: string;
    isChecked?: boolean,
    onSwitch?: (checked: boolean) => void,
}

const Switch = ({id, isChecked = false, onSwitch}: SwitchProps) => {
    const [checked, setChecked] = useState<boolean>(isChecked)

    const toggle = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked)
        onSwitch?.(e.target.checked)
    }

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
                onChange={toggle}
            />
        </label>
    );
};

export default Switch;