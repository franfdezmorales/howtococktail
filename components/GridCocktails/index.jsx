import styles from '../../styles/GridCocktails.module.css'
import { Cocktail } from '../Cocktail'
import { NoCocktails } from '../NoCocktails'

export const GridCocktails = ({cocktails, myCocktails, onSetNewCocktails}) => {

    return (
        <>
            {cocktails ? 
            <div className={styles.gridCocktails}>
                {cocktails.map(cocktail => (
                    <Cocktail key={cocktail.idDrink} cocktail={cocktail} myCocktails={myCocktails} onSetNewCocktails={onSetNewCocktails}/>
                ))}
            </div> 
                : 
            <NoCocktails />
            }
        </>
    )
}