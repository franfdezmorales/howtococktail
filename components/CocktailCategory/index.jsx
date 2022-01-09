import styles from '../../styles/CocktailCategory.module.css'


export const CocktailCategory = ({name, onClick}) => {

    const handleClick = () => {
        onClick(name)
    }
    return (
        <div onClick={handleClick} className={styles.cocktail}>{name}</div>
    )
}