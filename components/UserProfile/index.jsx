import styles from '../../styles/UserProfile.module.css'
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { UserLogout } from '../UserLogout'

export const UserProfile = ({ user }) => {

    const [showLogout, setShowLogout] = useState(false)
    
    const handleClick = () => {
        setShowLogout(true)
    }

    return (
        <div className={styles.userProfile}>
            <Image width={32} height={32} className={styles.avatar} src={user.picture} alt={user.name} />
            <span onClick={handleClick} className={styles.name}>{user.name}</span>
            {showLogout ? <UserLogout close={setShowLogout} /> : null}
        </div>
    )
}