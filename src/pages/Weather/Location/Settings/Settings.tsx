import styles from './Settings.module.css'
import ScrollBox from "../../../../components/ui/ScrollBox/ScrollBox.tsx";
import {axes} from "../../../../enums/axes/axes.ts";
import Card from "./Card/Card.tsx";
import Switch from "../../../../components/ui/Switch/Switch.tsx";
import {useTheme} from "../../../../contexts/Theme/Theme.ts";
import {LIGHT, DARK} from "../../../../enums/theme/theme.ts";
import {type ChangeEvent, useCallback} from "react";
import {useSettings} from "../../../../contexts/Settings/Settings.ts";

type MenuProps = {
    isOpen: boolean;
}

const Settings = ({isOpen}: MenuProps) => {
    const {theme, setTheme} = useTheme()
    const {
        isCelsius,
        setIsCelsius,
        isKilometers,
        setIsKilometers,
        isPascal,
        setIsPascal,
    } = useSettings()

    const switchTheme = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setTheme(e.target.checked ? DARK : LIGHT)
    }, [setTheme])

    const switchTemperatureUnit = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setIsCelsius(!e.target.checked)
    }, [setIsCelsius])

    const switchDistanceUnit = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setIsKilometers(!e.target.checked)
    }, [setIsKilometers])

    const switchPressureUnit = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setIsPascal(!e.target.checked)
    }, [setIsPascal])

    const menuBoxClasses: string = [
        styles.menu,
        isOpen && styles['menu--open']
    ].join(' ')

    return (
        <div className={menuBoxClasses}>
            <ScrollBox axis={axes.Y}>
                <div className={styles.content}>
                    <Card title={'Theme ( light / dark )'} >
                        <Switch
                            id={'theme'}
                            checked={theme === DARK}
                            onSwitch={switchTheme}
                        />
                    </Card>
                    <Card title={'Temperature ( celsius / fahrenheit )'} >
                        <Switch
                            id={'temperature'}
                            checked={!isCelsius}
                            onSwitch={switchTemperatureUnit}
                        />
                    </Card>
                    <Card title={'Distance ( kilometers / miles )'} >
                        <Switch
                            id={'distance'}
                            checked={!isKilometers}
                            onSwitch={switchDistanceUnit}
                        />
                    </Card>
                    <Card title={'Pressure ( pascals / inches )'} >
                        <Switch
                            id={'pressure'}
                            checked={!isPascal}
                            onSwitch={switchPressureUnit}
                        />
                    </Card>
                </div>
            </ScrollBox>
        </div>
    );
};

export default Settings;