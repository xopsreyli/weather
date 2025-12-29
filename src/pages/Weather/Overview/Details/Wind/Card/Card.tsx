import styles from './Card.module.css'

type CardProps = {
    name: string,
    value: number | string,
}

const Card = ({name, value}: CardProps) => {
    return (
        <div className={styles.card}>
            <p className={styles.name}>{name}</p>
            <span className={styles.value}>{value}</span>
        </div>
    );
};

export default Card;