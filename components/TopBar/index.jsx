import styles from '../../styles/TopBar.module.css'
import { NavRoute } from '../NavRoute'
import { LoginButton } from '../LoginButton'
import { LogoButton } from '../LogoButton'
import { useAuth } from '../../hooks/useAuth'
import { UserProfile } from '../UserProfile'

export const TopBar = () => {

    const { user } = useAuth()

    return (
        <nav className={styles.topbar}>
            <LogoButton />
            <div className={styles.routes}>
                <NavRoute title='My cocktails' image='/cocktail.png' href='/mycocktails' />
                <NavRoute title='Random Cocktail' image='/random.png' href='/randomcocktail' />
            </div>
            {user ? <UserProfile user={user}/> : <LoginButton />}
        </nav>
    )
}