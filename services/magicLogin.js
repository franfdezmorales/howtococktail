import { Magic } from '@magic-sdk/admin'

const createMagic = () => {
    return new Magic(process.env.MAGIC_SECRET_KEY)
}

export const magicLogin = createMagic()