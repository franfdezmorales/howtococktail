import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/NavRoute.module.css'


export const NavRoute = ({href, image, title}) => {
    return (
        <Link href={href}>
            <a className={styles.navRoute}>
                <Image objectFit='contain' width={25} height={25} src={image} alt='NavRoute' />
                <span>{title}</span>
            </a>
        </Link>
    )
}