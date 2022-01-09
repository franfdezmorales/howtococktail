import styles from '../../styles/Ingredient.module.css'


export const Ingredient = ({name}) => {
    return (
        <span className={styles.ingredient}>{name}</span>
    )
}