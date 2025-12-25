import React from 'react';
import styles from './TitledSection.module.css'
import Divider from "../Divider/Divider.tsx";
import Title from "./Title/Title.tsx";

type TitledSectionProps = {
    titleIcon?: React.ReactNode
    title: string,
    children: React.ReactNode;
    showDivider?: boolean;
}

const TitledSection = ({titleIcon, title, children, showDivider = false}: TitledSectionProps) => {
    return (
        <section className={styles.section}>
            <Title icon={titleIcon} title={title}/>
            {showDivider && <Divider isVertical={false} />}
            {children}
        </section>
    );
};

export default TitledSection;