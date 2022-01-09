import { useRouter } from "next/router";
import { useEffect } from "react";
import { magicAuth } from "../services/magicAuth";
import { useAuth } from "../hooks/useAuth";
import { Spinner } from "../components/Spinner";
import styles from '../styles/Callback.module.css'

const Callback = () => {

    const router = useRouter()

    const { setUser } = useAuth()

    useEffect(() => {
        finishLogin()
    }, [])

    const finishLogin = async () => {
        const authData = await magicAuth.oauth.getRedirectResult()
        autenticateWithServer(authData)
    }

    const autenticateWithServer = async (authData) => {

        const {magic, oauth} = authData

        const authRequest = await fetch('/api/login', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${magic.idToken}`,
            },
            body: JSON.stringify({
                data: oauth.userInfo
            })
        })

        if (authRequest.status === 200) {
            setUser(oauth.userInfo)
            router.push('/')
        }
    }

    return (
        <div className={styles.container}>
            <Spinner />
            <span className={styles.title}>Cargando datos...</span>
        </div>
    )

}

export default Callback;