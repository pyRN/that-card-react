/* Action sets logged in user */
import { GET_CURRENT_USER } from '../actions/types'

const initialState = {
    userEmail: "jacobmayeux@gmail.com", 
    collectionId: null
}

export default function currentUser(state = initialState, action) {
    switch (action.type) {
        case GET_CURRENT_USER:
            return {...state }
        default:
            return state
    }
}