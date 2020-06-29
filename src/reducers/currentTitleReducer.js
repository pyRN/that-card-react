/* Action will change the NavBarComponent brand dynamically based on expansion clicked or card searched */
import { SET_DYNAMIC_TITLE } from '../actions/types'

const initialState = 'Do I Have That Card'

export default function currentTitle(state = initialState, action) {
    switch (action.type) {
        case SET_DYNAMIC_TITLE:
            return action.from_set ? `Do I Have Cards From: ${action.text}` : `Do I Have: ${action.text}`
        default:
            return state
    }
}
