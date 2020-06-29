import { SET_DIRTY_FLAG } from '../actions/types'

const initialState = false

export default function dirtyFlag(state = initialState, action) {
    switch (action.type) {
        case SET_DIRTY_FLAG:
            return action.dirty_flag
        default:
            return state
    }
}