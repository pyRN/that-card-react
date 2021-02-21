//Reducer is used when user registers for a new account.  Sets state to notify user if email is already in use and whether registration was successfull. 

import { SET_REGISTERED } from '../actions/types'

//Initial values are null, state changes when user presses "Register" button
const initialState = {
    bEmailAlreadyExists: null,
    bRegistrationSuccessfull: null
}

export default function checkRegistration(state = initialState, action) {
    switch (action.type) {
        case SET_REGISTERED:
            return {
                bEmailAlreadyExists: action.payload.bEmailAlreadyExists,
                bRegistrationSuccessfull: action.payload.bRegistrationSuccessfull
            }
        default:
            return state
    }
}