import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Search } from '../components/Search'
import { CocktailCategories } from '../components/CocktailCategories'
import { GridCocktails } from '../components/GridCocktails'
import { useState } from 'react'
import { useCocktails } from '../hooks/useCocktails'
import { useMyCocktails } from '../context/CocktailProvider'
import { Spinner } from '../components/Spinner'
import { NoCocktails } from '../components/NoCocktails'


export default function Home({categories}) {

  const [currentCategory, setCurrentCategory] = useState('')
  const { cocktails, setCocktails, loading, error } = useCocktails(currentCategory)
  const { myCocktails, setMyCocktails } = useMyCocktails()

  return (
    <div className={styles.container}>
      <Head>
        <title>How To Cocktail</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Search onSearch={setCocktails} />
      <CocktailCategories categories={categories} setCategory={setCurrentCategory} />
      {loading ? error ? <NoCocktails /> : <Spinner /> : <GridCocktails cocktails={cocktails} myCocktails={myCocktails} onSetNewCocktails={setMyCocktails} />}
    </div>
  )
}

export async function getStaticProps() {
  const categories = await fetch(`http://www.thecocktaildb.com/api/json/v1/${process.env.NEXT_PUBLIC_COCKTAIL_SECRET_API}/list.php?c=list`)
  .then(r => r.ok && r.json())
  .then(categories => categories.drinks || [])
  
  return {
    props: {
      categories
    },
  }
}
