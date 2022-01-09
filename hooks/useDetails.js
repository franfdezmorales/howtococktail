import { useState } from "react"
import useSWR from "swr"



const fetcher = (...args) => fetch(...args).then(r => r.ok && r.json()).then(categories => categories.drinks[0] || [])

export function useDetails(id) {

    const { data: drink, error } = useSWR(`https://www.thecocktaildb.com/api/json/v1/${process.env.NEXT_PUBLIC_COCKTAIL_SECRET_API}/lookup.php?i=${id}`, fetcher)
    
    const loading = drink === undefined

    return {
        drink,
        loading,
        error
    };
}