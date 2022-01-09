import styles from '../../styles/Cocktail.module.css'
import Image from 'next/image'
import { ModalDetails } from '../ModalDetails'
import { useState } from 'react'
import { useAuth } from '../../hooks/useAuth'

export const Cocktail = ({cocktail, myCocktails, onSetNewCocktails}) => {

    const { user } = useAuth()

    const [show, setShow] = useState(false)

    const handleShowModal = () => {
        setShow(true)
    }

    const handleSaveCocktail = async () => {
        const newCocktail = await fetch('/api/cocktails/addCocktail', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
                body: JSON.stringify({
                    usersub: user.sub, 
                    cocktailid: cocktail.idDrink
            })
        })
        .then(r => r.ok && r.json())

        onSetNewCocktails([...myCocktails, newCocktail.cocktail_id])
    }
    
    return (
        <div className={styles.cocktail}>
            <Image className={styles.cocktailImage} src={cocktail.strDrinkThumb} width={100} height={100} alt='' />
            <span>{cocktail.strDrink}</span>
            <div className={styles.buttons}>
                <button onClick={handleShowModal}>Details</button>
                {myCocktails.includes(Number(cocktail.idDrink)) ? <button disabled onClick={handleSaveCocktail}>Saved</button> : <button disabled={user === null} onClick={handleSaveCocktail}>Save</button>}
            </div>
            {show ?<ModalDetails id={cocktail.idDrink} close={setShow} /> : null}
        </div>
    )
}