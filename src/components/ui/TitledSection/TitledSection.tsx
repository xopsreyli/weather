import React from 'react';
import styles from './TitledSection.module.css'

type TitledSectionProps = {
    title: string,
    children: React.ReactNode;
}

const TitledSection = ({title, children}: TitledSectionProps) => {
    return (
        <section className={styles.section}>
            <p className={styles.title}>{title}</p>
            <hr className={styles.separaton} />
            {children}
        </section>
    );
};

export default TitledSection;