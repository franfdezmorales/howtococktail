import { addCocktailToUser } from "../../../services/prisma"

export default async function addCocktail(req, res) {
    if (req.method !== 'POST') return res.status(405).end()

    try {
        const userSub = req.body.usersub
        const cocktailId = Number(req.body.cocktailid) 
        const newCocktail = await addCocktailToUser(userSub, cocktailId)
        res.status(200).json(newCocktail)

    } catch (error) {
        res.status(500).json({error: error.message})
    }

    res.end()
}