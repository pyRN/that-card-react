import { GET_CURRENT_USER, SET_REGISTERED, CREATE_USER_COLLECTION } from './types'
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
            //Dispatch that registration was successful
            dispatch({
                type: SET_REGISTERED,
                payload: {
                    bEmailAlreadyExists: false,
                    bRegistrationSuccessfull: true
                }
            })

            //Dispatch user information
            dispatch({
                type: GET_CURRENT_USER,
                payload: {
                    sEmailAddress: res.data.sEmailAddress, 
                    sUserCollectionId: res.data.sUserCollectionId,
                    bIsLoggedIn: true,
                    bIsLoading: true
                }
            })
            
            //Create userDB
            axios.post(`/api/userCards/`, {sUserCollectionId: res.data.sUserCollectionId})
                .then(res => {
                    //Dispatch to create user DB
                    dispatch({
                        type: CREATE_USER_COLLECTION,
                        payload: {
                            sUserCollectionId: res.data.sUserCollectionId
                        }
                    })
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