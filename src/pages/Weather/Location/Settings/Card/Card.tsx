import styles from './Card.module.css'
import React from "react";

type CardProps = {
    title: string,
    children?: React.ReactNode,
}

const Card = ({title, children}: CardProps) => {
    return (
        <div className={styles.card}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.box}>
                {children}
            </div>
        </div>
    );
};

export default Card;