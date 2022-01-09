import { useDetails } from '../../hooks/useDetails';
import styles from '../../styles/ModalDetails.module.css'; 
import Image from 'next/image';
import { Ingredient } from '../Ingredient';

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


export const ModalDetails = ({id, close}) => {

    const { drink, loading } = useDetails(id)

    const handleClose = () => {
        close(false)
    }

    if (loading) return null

    const ingredients = getIngredients(drink)

    return (
        <div className={styles.modal} onClick={handleClose}>
            <div className={styles.modalContent}>
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
        </div>
    )
}