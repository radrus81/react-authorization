import { AUTH_SUCCESS, AUTH_LOGOUT, AUTH_ERROR } from './actionTypes'


export function auth(login, password) {

    const loginFromBase = 'admin'
    const passFromBase = 'admin'
    const fio = 'Test Test Test'
    const token = '43483304e87f464a81dfa084ca1e643c'//token должен приходить от сервера
    const expiresIn = 60 //время жизни токена
    //тут реализуется запрос в базу
    return async dispatch => {
        if (loginFromBase === login && passFromBase === password) {
            const expirationDate = new Date(new Date().getTime() + expiresIn * 1000)
            localStorage.setItem('token', token)
            localStorage.setItem('login', login)
            localStorage.setItem('fio', fio)
            localStorage.setItem('expirationDate', expirationDate)
            dispatch(authSuccess(login, token, fio))
        } else {
            dispatch(authErrors('Не правильный логин или пароль'))
        }
    }
}


export function authSuccess(login, token, fio) {
    return {
        type: AUTH_SUCCESS,
        login, token, fio
    }
}

export function authErrors(message) {
    return {
        type: AUTH_ERROR,
        message
    }
}

export function logout() {
    localStorage.clear()
    return {
        type: AUTH_LOGOUT
    }
}

export function autoAuth() {

    return dispatch => {

        const token = localStorage.getItem('token')
        const login = localStorage.getItem('login')
        const fio = localStorage.getItem('fio')

        if (!token) {
            dispatch(logout())
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'))
            if (expirationDate <= new Date()) {
                dispatch(logout())
            } else {
                dispatch(authSuccess(login, token, fio))
            }
        }
    }
}
