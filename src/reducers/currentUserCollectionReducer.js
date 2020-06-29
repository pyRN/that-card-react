import { SET_USER_COLLECTION } from '../actions/types'

const initialState = null

export default function currentUserCollection(state = initialState, action) {
    switch (action.type) {
        case SET_USER_COLLECTION:
            return action.collection
        default:
            return state
    }
}