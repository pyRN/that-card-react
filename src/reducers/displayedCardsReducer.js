import { GET_DISPLAYED_CARDS, SET_SEARCH_RESULTS } from '../actions/types'

const initialState = {
    data: null,
    oHeaderValues: {
        bIsFromSet: false,
        sInputValue: null,
        sTitle: "Do I Have That Card?"
    },
}

export default function currentDisplayedCards(state = initialState, action) {
    switch (action.type) {
        case GET_DISPLAYED_CARDS:
            return {...state}
        case SET_SEARCH_RESULTS:
            return { 
                data: action.payload.aDisplayedCards,
                oHeaderValues: {
                    bIsFromSet: action.payload.bIsFromSet,
                    sInputValue: action.payload.sInputValue,
                    sTitle: action.payload.sTitle
                }
            }
        default:
            return state
    }
}