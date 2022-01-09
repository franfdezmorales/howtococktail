import styles from '../../styles/UserLogout.module.css'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { useAuth } from '../../hooks/useAuth'

export const UserLogout = ({close}) => {

    const ref = useRef(null)

    const { setUser } = useAuth()

    const handleClickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            close && close(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true)

        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        }
    }, [])

    const handleClick = async (e) => {
        const authRequest = await fetch('/api/logout', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            }
        })

        if (authRequest.status === 200) {
            setUser(null)
        }
    }

    return (
        <div ref={ref} onClick={handleClick} className={styles.userLogout}>
            <Image src='/logout.png' width={20} height={20} alt='Logout' />
            <span>Log Out</span>
        </div>
    )
}
