import Iron from '@hapi/iron'
import { getAuthToken } from '../../services/cookie'

export default async function User(req, res) {
    try {
        const user = await Iron.unseal(getAuthToken(req.cookies), process.env.ENCRYPTION_SECRET, Iron.defaults)
        res.json(user)
    } catch (error) {
        res.status(401)
    }

    res.end()
}