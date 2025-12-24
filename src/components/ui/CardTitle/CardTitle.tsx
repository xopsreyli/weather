import React from 'react';
import styles from './CardTitle.module.css';

type TitleProps = {
    icon?: React.ReactNode,
    title: string,
}

const CardTitle = ({icon, title}: TitleProps) => {
    return (
        <h3 className={styles.title}>
            {icon}
            <span className={styles.text}>
                {title}
            </span>
        </h3>
    );
};

export default CardTitle;