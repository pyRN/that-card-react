import { SET_EXPANSION_LIST } from '../actions/types'

const initialState = {
    expansions: []
}

export default function expansionsList(state = initialState, action) {
    switch (action.type) {
        case SET_EXPANSION_LIST:
            return {...state, expansions: action.payload}
        default:
            return state
    }
}