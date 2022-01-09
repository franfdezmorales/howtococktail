import Image from 'next/image'
import Link from 'next/link'

export const LogoButton = () => {
    return (
        <Link href='/'>
            <a>
                <Image objectFit='contain' width={50} height={50} src='/logo.png' alt='Logo' />
            </a>
        </Link>
    )
}