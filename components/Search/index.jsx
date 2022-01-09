import styles from '../../styles/Search.module.css'
import Image from 'next/image'
import { useState } from 'react'

export const Search = ({onSearch}) => {

    const [search, setSearch] = useState('')

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSearch = async () => {
        const drinks = await fetch(`https://www.thecocktaildb.com/api/json/v1/${process.env.NEXT_PUBLIC_COCKTAIL_SECRET_API}/search.php?s=${search}`).then(r => r.ok && r.json()).then(r => r.drinks || [])
        onSearch(drinks, false)
    }

    return (
        <div className={styles.search}>
            <input type='text' placeholder='Search a cocktail...' value={search} onChange={handleChange} className={styles.searcher} />
            <Image className={styles.imageSearcher} src='/search.svg' alt='Search' width={48} height={48} onClick={handleSearch}/>
        </div>
    )
}