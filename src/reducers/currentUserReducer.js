/* Action sets logged in user */
import { GET_CURRENT_USER, LOGOUT } from '../actions/types'

const initialState = {
    sEmailAddress: null,
    bIsLoggedIn: false,
    bIsLoading: false,
    oCollection: {}
}

export default function currentUser(state = initialState, action) {
    switch (action.type) {
        case GET_CURRENT_USER:
            return {
                sEmailAddress: action.payload.sEmailAddress,
                bIsLoggedIn: action.payload.bIsLoggedIn,
                bIsLoading: action.payload.bIsLoading,
                oCollection: action.payload.oCollection
            }
        case LOGOUT:
            return {
                sEmailAddress: null,
                bIsLoggedIn: false,
                bIsLoading: false,
                oCollection: {}
            }
        default:
            return state
    }
}