import styles from './Settings.module.css'
import ScrollBox from "../../../../components/ui/ScrollBox/ScrollBox.tsx";
import {axes} from "../../../../enums/axes/axes.ts";
import Card from "./Card/Card.tsx";
import Switch from "../../../../components/ui/Switch/Switch.tsx";
import {useTheme} from "../../../../contexts/Theme/Theme.ts";
import {LIGHT, DARK} from "../../../../enums/theme/theme.ts";
import {useCallback} from "react";
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

    const switchTheme = useCallback((isEnabled: boolean) => {
        setTheme(isEnabled ? DARK : LIGHT)
    }, [setTheme])

    const switchTemperatureUnit = useCallback((isEnabled: boolean) => {
        setIsCelsius(!isEnabled)
    }, [setIsCelsius])

    const switchDistanceUnit = useCallback((isEnabled: boolean) => {
        setIsKilometers(!isEnabled)
    }, [setIsKilometers])

    const switchPressureUnit = useCallback((isEnabled: boolean) => {
        setIsPascal(!isEnabled)
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
                            isChecked={theme === DARK}
                            onSwitch={switchTheme}
                        />
                    </Card>
                    <Card title={'Temperature ( celsius / fahrenheit )'} >
                        <Switch
                            id={'temperature'}
                            isChecked={!isCelsius}
                            onSwitch={switchTemperatureUnit}
                        />
                    </Card>
                    <Card title={'Distance ( kilometers / miles )'} >
                        <Switch
                            id={'distance'}
                            isChecked={!isKilometers}
                            onSwitch={switchDistanceUnit}
                        />
                    </Card>
                    <Card title={'Pressure ( pascals / inches )'} >
                        <Switch
                            id={'pressure'}
                            isChecked={!isPascal}
                            onSwitch={switchPressureUnit}
                        />
                    </Card>
                </div>
            </ScrollBox>
        </div>
    );
};

export default Settings;