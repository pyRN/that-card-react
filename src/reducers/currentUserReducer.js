/* Action sets logged in user */
import { GET_CURRENT_USER } from '../actions/types'

const initialState = {
<<<<<<< HEAD
    sUserEmail: null, 
    nCollectionId: null,
    bIsLoggedIn: false
=======
    sEmailAddress: null, 
    sUserCollectionId: null,
    bIsLoggedIn: false,
    bIsLoading: false
>>>>>>> devBranch
}

export default function currentUser(state = initialState, action) {
    switch (action.type) {
        case GET_CURRENT_USER:
            return {
                        sEmailAddress: action.payload.sEmailAddress, 
                        sUserCollectionId: action.payload.sUserCollectionId,
                        bIsLoggedIn: action.payload.bIsLoggedIn,
                        bIsLoading: action.payload.bIsLoading
                    }
        default:
            return state
    }
}