import React from 'react';
import styles from './TitledSection.module.css'
import Divider from "../Divider/Divider.tsx";
import CardTitle from "../CardTitle/CardTitle.tsx";

type TitledSectionProps = {
    title: string,
    children: React.ReactNode;
}

const TitledSection = ({title, children}: TitledSectionProps) => {
    return (
        <section className={styles.section}>
            <CardTitle title={title}/>
            <Divider isVertical={false} />
            {children}
        </section>
    );
};

export default TitledSection;