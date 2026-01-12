import styles from './Settings.module.css'
import ScrollBox from "../../../../components/ui/ScrollBox/ScrollBox.tsx";
import {axes} from "../../../../enums/axes/axes.ts";
import Card from "./Card/Card.tsx";
import Switch from "../../../../components/ui/Switch/Switch.tsx";
import {useTheme} from "../../../../contexts/Theme/Theme.ts";
import {LIGHT, DARK} from "../../../../enums/theme/theme.ts";
import {useCallback} from "react";

type MenuProps = {
    isOpen: boolean;
}

const Settings = ({isOpen}: MenuProps) => {
    const {theme, setTheme} = useTheme()

    const switchTheme = useCallback(() => {
        setTheme(theme => theme === LIGHT ? DARK : LIGHT)
    }, [setTheme])

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
                            isEnabled={theme === DARK}
                            onSwitch={switchTheme}
                        />
                    </Card>
                </div>
            </ScrollBox>
        </div>
    );
};

export default Settings;