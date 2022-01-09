import useSWR from "swr"


const fetcher = (...args) => fetch(...args).then(r => r.ok && r.json()).then(categories => categories.drinks || [])

export function useCocktails(category) {
    const { data: cocktails, error, mutate: setCocktails } = useSWR(`https://www.thecocktaildb.com/api/json/v1/${process.env.NEXT_PUBLIC_COCKTAIL_SECRET_API}/filter.php?c=${category}`, fetcher, {revalidateOnFocus: false})
    const loading = cocktails === undefined
    return {
        cocktails,
        loading,
        error, 
        setCocktails
    };
}