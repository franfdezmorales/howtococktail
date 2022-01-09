import { useState, useContext, createContext, useEffect } from "react"
import { useAuth } from "../hooks/useAuth"

const Context = createContext(undefined)


export function CocktailProvider({children}) {
    const { user } = useAuth()
    const [myCocktails, setMyCocktails] = useState([])

    useEffect(() => {
        async function fetchMyCocktails(){
            let _cocktails = []
            await fetch(`api/cocktails/${user?.sub}`)
            .then(r => r.ok && r.json())
            .then(r => r.forEach(cocktail => _cocktails = [..._cocktails, cocktail.cocktail_id]))
            .then(r => setMyCocktails(_cocktails))
        }
        fetchMyCocktails()
    }, [user])

    const value = {
        myCocktails, 
        setMyCocktails
    }

    return <Context.Provider value={value}>{children}</Context.Provider>

}


export const useMyCocktails = () => {
    const { myCocktails, setMyCocktails } = useContext(Context)
    return { myCocktails, setMyCocktails }
}