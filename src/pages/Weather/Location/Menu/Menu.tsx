import styles from './Menu.module.css'
import ScrollBox from "../../../../components/ui/ScrollBox/ScrollBox.tsx";
import {axes} from "../../../../enums/axes/axes.ts";

type MenuProps = {
    isOpen: boolean;
}

const Menu = ({isOpen}: MenuProps) => {
    const menuBoxClasses: string = [
        styles.menu,
        isOpen && styles['menu--open']
    ].join(' ')

    return (
        <div className={menuBoxClasses}>
            <ScrollBox axis={axes.Y}>
                <div className={styles.content}>

                </div>
            </ScrollBox>
        </div>
    );
};

export default Menu;