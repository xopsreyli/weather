import React from 'react';
import styles from './DetailBackground.module.css';

type DetailBackgroundProps = {
    children: React.ReactNode;
}

const DetailBackground = ({children}: DetailBackgroundProps) => {
    return (
        <div className={styles.background}>
            {children}
        </div>
    );
};

export default DetailBackground;