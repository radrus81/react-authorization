import { AUTH_SUCCESS, AUTH_LOGOUT, AUTH_ERROR } from "../actions/actionTypes"

const initialState = {
    token: null,
    login: '',
    fio: '',
    errMessage: ''
}

export default function authorizationReducer(state = initialState, action) {

    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                token: action.token,
                login: action.login,
                fio: action.fio,
                errMessage: ''
            }
        case AUTH_LOGOUT:
            return {
                ...state,
                token: null,
                login: '',
                fio: '',
                errMessage: ''
            }
        case AUTH_ERROR:
            return {
                ...state,
                token: null,
                login: '',
                fio: '',
                errMessage: action.message
            }

        default:
            return state
    }
}


