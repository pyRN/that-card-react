import { GET_CURRENT_USER, SET_REGISTERED } from './types'
import axios from 'axios'

export const getCurrentUser = sEmailAddress => dispatch => {
    axios.get(`/api/users/${sEmailAddress}`)
        .then(res => {
            dispatch({
                type: GET_CURRENT_USER,
                payload: res.data
            })
        })
}

export const addNewUser = (sEmailAddress, sPassword) => dispatch => {
    axios.post(`/api/users/`, {
        sEmailAddress: sEmailAddress, 
        sPassword: sPassword})
        .then(res => {
            dispatch({
                type: SET_REGISTERED,
                payload: {
                    bEmailAlreadyExists: false,
                    bRegistrationSuccessfull: true
                }
            })
        })
        .catch((err) => {
            dispatch({
                type: SET_REGISTERED,
                payload: {
                    bEmailAlreadyExists: true,
                    bRegistrationSuccessfull: false
                }
            })
        })
}   