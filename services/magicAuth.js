import { Magic } from 'magic-sdk'
import { OAuthExtension } from '@magic-ext/oauth'

const createMagic = () => {
    return new Magic(process.env.NEXT_PUBLIC_MAGIC_PUB_KEY, { extensions: [new OAuthExtension()]})
}

export const magicAuth = createMagic()