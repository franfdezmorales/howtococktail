import { getMyCocktails } from '../../../services/prisma'

export default async function handler(req, res) {
    if (req.method !== 'GET') return res.status(405).end()

    try {
        const { id } = req.query
        const cocktails = await getMyCocktails(id)
        res.status(200).json(cocktails)

    } catch (error) {
        res.status(500).json({error: error.message})
    }

    res.end()
}