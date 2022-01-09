import styles from '../../styles/CocktailCategories.module.css'
import { CocktailCategory } from '../CocktailCategory'

export const CocktailCategories = ({categories, setCategory}) => {

    return (
        <div className={styles.gridCategories}>
            {categories.map((category, index) => (
                <CocktailCategory onClick={setCategory} key={index} name={category.strCategory}/>
            ))}
        </div>
    )
}