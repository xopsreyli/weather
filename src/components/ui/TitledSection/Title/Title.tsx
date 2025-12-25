import React from 'react';
import styles from './Title.module.css';

type TitleProps = {
    icon?: React.ReactNode,
    title: string,
}

const Title = ({icon, title}: TitleProps) => {
    return (
        <h3 className={styles.title}>
            {icon}
            <span className={styles.text}>
                {title}
            </span>
        </h3>
    );
};

export default Title;