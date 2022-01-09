import Image from "next/image"
import styles from '../../styles/NoCocktails.module.css'

export const NoCocktails = () => {
    return (
        <div className={styles.container}>
            <Image src='/sadface.svg' width={170} height={170} alt='NoCocktails' />
            <span>There are no cocktails</span>
        </div>
    )
}