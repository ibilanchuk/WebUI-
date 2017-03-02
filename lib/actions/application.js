import * as constants from '../constants'
import processResponse from '../utils/process-response'
import {CALL_API} from 'redux-api-middleware'
import {push} from 'redux-router';
export const START = 'START'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'

export function logout() {
    return dispatch => {
        dispatch({
            [CALL_API]: {
                endpoint: 'http://192.168.42.103:29999/logout',
                method: 'GET',
                headers: {
                    'X-Key':constants.getToken()
                },
                types: [
                    START,
                    SUCCESS,
                    FAILURE
                ]
            }
        })
    }
}

export function authUser(form) {
    return dispatch => {
        dispatch({
            [CALL_API]: {
                endpoint: 'http://192.168.42.103:29999/login',
                method: 'POST',
                body:"username="+encodeURIComponent(form.login)+"&password="+encodeURIComponent(form.password),
                headers: {
                    'Content-Type':"application/x-www-form-urlencoded"
                },
                types: [
                    START,
                    {
                        type: SUCCESS,
                        payload: (action, state, res) => {
                            res.json().then((json) => {
                                window.localStorage.setItem('accessLevel',json.role)
                                window.localStorage.setItem('token',res.headers.get('X-Key'))
                                dispatch(push('/'));
                                return res.headers.get('X-Key')
                            })

                        }
                    },
                    {
                        type: FAILURE,
                        payload: (action, state, res) => {
                            return res.json().message
                        }
                    },
                ]
            }
        })
    }
}
export const GET_STUDENT_START = 'GET_STUDENT_START'
export const GET_STUDENT_SUCCESS = 'GET_STUDENT_SUCCESS'
export const GET_STUDENT_FAILURE = 'GET_STUDENT_FAILURE'
export function getStudent() {
    return dispatch => {
        dispatch({
            [CALL_API]: {
                endpoint: 'http://192.168.42.103:29999/general/student',
                method: 'GET',
                headers: {
                    'Content-Type':"application/json",
                    'X-Key':constants.getToken()
                },
                types: [
                    GET_STUDENT_START,
                    {
                        type: GET_STUDENT_SUCCESS,
                        payload: (action, state, res) => {
                            window.localStorage.setItem('token',res.headers.get('X-Key'))
                            return res.json()
                        }
                    },
                    {
                        type: GET_STUDENT_FAILURE,
                        payload: (action, state, res) => {
                            if(res.status == 401){
                                dispatch({ type: constants.LOG_OUT })
                                dispatch(push('/login'))
                            }
                            return res.json().message
                        }
                    },
                ]
            }
        })
    }
}

export const CREATE_START = 'CREATE_START'
export const CREATE_SUCCESS = 'CREATE_SUCCESS'
export const CREATE_FAILURE = 'CREATE_FAILURE'

export function postUser(form) {
    return dispatch => {
        dispatch({
            [CALL_API]: {
                endpoint: 'http://192.168.42.103:29999/admin/user',
                method: 'POST',
                body:  JSON.stringify({
                        "login": "user676757",
                        "password": "user567567",
                        "email": "user5677@userdff.com"
                    }),
                headers: {
                    'Content-Type':"application/json"
                },
                types: [
                    CREATE_START,
                    {
                        type: CREATE_SUCCESS,
                        payload: (action, state, res) => {
                            return res.json()
                        }
                    },
                    {
                        type: CREATE_FAILURE,
                        payload: (action, state, res) => {
                            return res.json().message
                        }
                    },
                ]
            }
        })
    }
}
