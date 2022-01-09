import { serialize } from 'cookie'

const TOKEN_NAME = 'api_token'
const SESSION_NAME = 'api_session'
const MAX_AGE = 60 * 60 * 8


function createCookie(name, data, options = {}) {
    return serialize(name, data, {
        maxAge: MAX_AGE,
        expires: new Date(Date.now() + MAX_AGE * 1000),
        secure: process.env.NODE_ENV === "production",
        path: "/",
        httpOnly: true,
        sameSite: "lax",
        ...options,
    })
}

function removeCookie(name) {
    return serialize(name, '', {
        maxAge: -1, 
        path: '/'
    })
}

function setTokenCookie(res, token, sessionToken) {
    res.setHeader("Set-Cookie", [
        createCookie(TOKEN_NAME, token),
        createCookie(SESSION_NAME, sessionToken),
        createCookie("authed", true, { httpOnly: false }),
    ])
}


function removeTokenCookie(res) {
    res.setHeader('Set-Cookie', [
        removeCookie(TOKEN_NAME), 
        removeCookie(SESSION_NAME),
        removeCookie('authed')
    ])
}

function getAuthToken(cookies) {
    return cookies[TOKEN_NAME]
}

function getSessionToken(cookies) {
    return cookies[SESSION_NAME]
}

export {getSessionToken, setTokenCookie, getAuthToken, removeTokenCookie}