import styles from '../../styles/CardDetails.module.css'
import Image from 'next/image'
import { Ingredient } from '../Ingredient'


const getIngredients = (drink) => {
    let totalIngredients = []
    for (let i = 1; i <= 15; i++) {
        const ingredient = drink[`strIngredient${i}`]
        const qty = drink[`strMeasure${i}`]
        if (!ingredient) break
        totalIngredients = [...totalIngredients, `${qty ? qty : ''} ${ingredient}`]
    }

    return totalIngredients
}

export const CardDetails = ({ drink }) => {

    const ingredients = getIngredients(drink)

    return (
        <div className={styles.card}>
            <span className={styles.title}>{drink.strDrink}</span>
            <Image className={styles.cocktailImage} src={drink.strDrinkThumb} width={250} height={250} alt='Drink' />
            <hr />
            <span className={styles.description}>{drink.strInstructions.length > 0 ? drink.strInstructions : 'No description available. :('}</span>
            <hr />
            <div className={styles.ingredients}>
                {ingredients.map(ingredient => (
                    <Ingredient key={ingredient} name={ingredient} />
                ))}
            </div>
        </div>
        )
}