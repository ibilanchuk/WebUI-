export const LOGGED_IN = 'LOGGED_IN'
export const LOG_OUT = 'LOG_OUT'

export function getToken() {
    return window.localStorage.getItem('token')
}
