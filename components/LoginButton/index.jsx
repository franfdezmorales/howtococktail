import Image from 'next/image';
import styles from '../../styles/LoginButton.module.css'
import { magicAuth } from '../../services/magicAuth'

export const LoginButton = () => {

    const handleLogin = async (e) => {
        e.preventDefault() 
        const result = await magicAuth.oauth.loginWithRedirect({provider: 'google', redirectURI: new URL(`/callback`, window.location.origin).href})
    }

    return (
        <div className={styles.containerButton}>
            <button className={styles.loginButton} onClick={handleLogin}>
                <Image width={20} height={20} src='/google.svg' alt='Login'/>
                <span>Login with Google</span>
            </button>
        </div>
    )
}

