import { magicLogin } from "../../services/magicLogin"
import Iron from '@hapi/iron'
import { getSessionToken, removeTokenCookie } from '../../services/cookie'

export default async function Logout(req, res) {
    if (req.method !== 'POST') return res.status(405).end()

    try {
        const session = await Iron.unseal(getSessionToken(req.cookies), process.env.ENCRYPTION_SECRET, Iron.defaults)
        await magicLogin.users.logoutByIssuer(session.issuer); 
        removeTokenCookie(res)
        res.status(200).json({authenticated: false})

    } catch (error) {
        res.status(500).json({error: error.message})
    }

    res.end()
}