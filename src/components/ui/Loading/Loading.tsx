import styles from './Loading.module.css'
import Load from "../../icons/Load/Load.tsx";

const Loading = () => {
    return (
        <div className={styles.box}>
            <Load className={styles.icon} />
        </div>
    );
};

export default Loading;