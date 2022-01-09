import { magicLogin } from "../../services/magicLogin"
import Iron from '@hapi/iron'
import { setTokenCookie } from '../../services/cookie'
import { createUserIfNotExists } from "../../services/prisma"

export default async function Login(req, res) {
    if (req.method !== 'POST') return res.status(405).end()

    try {
        const idToken = req.headers.authorization.split('Bearer').pop().trim()
        const dataInfo = req.body.data;
        await magicLogin.token.validate(idToken)
        const userMetadata = await magicLogin.users.getMetadataByToken(idToken)
        const sessionToken = await Iron.seal(userMetadata, process.env.ENCRYPTION_SECRET, Iron.defaults)
        const token = await Iron.seal(dataInfo, process.env.ENCRYPTION_SECRET, Iron.defaults)
        setTokenCookie(res, token, sessionToken)
        createUserIfNotExists(dataInfo.sub)
        res.status(200).json({authenticated: true})

    } catch (error) {
        res.status(500).json({error: error.message})
    }

    res.end()
}