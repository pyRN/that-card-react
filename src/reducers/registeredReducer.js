/* Action sets registration successful */
import { SET_REGISTERED } from '../actions/types'

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