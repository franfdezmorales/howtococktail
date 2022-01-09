import Head from 'next/head'
import styles from '../styles/MyCocktails.module.css'
import { useEffect, useState } from 'react'
import { GridCocktails } from '../components/GridCocktails'
import { useMyCocktails } from '../context/CocktailProvider'
import { Spinner } from '../components/Spinner'
import { NoCocktails } from '../components/NoCocktails'


export default function MyCocktails() {

    const { myCocktails, setMyCocktails } = useMyCocktails()
    const [ cocktails, setCocktails ] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        function fetchMyCocktails() {
            let promises = []
            for (let i = 0; i < myCocktails.length; i++) {
                promises = [...promises, fetch(`https://www.thecocktaildb.com/api/json/v1/${process.env.NEXT_PUBLIC_COCKTAIL_SECRET_API}/lookup.php?i=${myCocktails[i]}`)]
            }
            return Promise.all(promises)
        }
        const awaitJSON = (responses) => Promise.all(responses.map(r => r.ok && r.json()))

        fetchMyCocktails()
        .then(awaitJSON)
        .then(data => {
            let cocktails = []
            data.forEach(cocktail => {
                cocktails = [...cocktails, cocktail.drinks[0]]
            })
            setCocktails(cocktails)
        })
        .finally(() => {
            setLoading(false)
        })

    }, [myCocktails])


    return (
        <div className={styles.container}>
            <Head>
                <title>How To Cocktail - My cocktails</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {loading ? <Spinner /> : cocktails.length > 0 ? <GridCocktails cocktails={cocktails} myCocktails={myCocktails} onSetNewCocktails={setMyCocktails} /> : <NoCocktails />}
        </div>
    )
}