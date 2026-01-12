import styles from './Header.module.css'
import Menu from "../../../../components/icons/Menu/Menu.tsx";

type HeaderProps = {
    toggleMenu: () => void;
}

const Header = ({toggleMenu}: HeaderProps) => {
    return (
        <header className={styles.header}>
            <button
                className={styles['menu-btn']}
                onClick={toggleMenu}
            >
                <Menu className={styles['menu-btn__icon']} />
            </button>
        </header>
    );
};

export default Header;