import styles from './Loading.module.css'
import Load from "../icons/Load/Load.tsx";

const Loading = () => {
    return (
        <div className={styles.box}>
            <Load customClasses={[styles.icon]} />
        </div>
    );
};

export default Loading;