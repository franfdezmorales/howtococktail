import Head from 'next/head'
import { CardDetails } from '../components/CardDetails'
import styles from '../styles/RandomCocktail.module.css'

export default function RandomCocktail({cocktail}) {

    return (
        <div className={styles.container}>
            <Head>
                <title>How To Cocktail - Random Cocktail</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <CardDetails drink={cocktail} />
        </div>
    )
}

export async function getStaticProps() {
    const cocktail = await fetch(`http://www.thecocktaildb.com/api/json/v1/${process.env.NEXT_PUBLIC_COCKTAIL_SECRET_API}/random.php`)
        .then(r => r.ok && r.json())
        .then(cocktail => cocktail.drinks[0] || [])

    return {
        props: {
            cocktail
        },
    }
}
