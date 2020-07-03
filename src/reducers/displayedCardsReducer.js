import { SET_LOADING, SET_SEARCH_RESULTS } from '../actions/types'

const initialState = {
    aDisplayedCards: null,
    oHeaderValues: {
        bIsFromSet: false,
        sInputValue: null,
        sTitle: "Do I Have That Card?"
    },
    bIsDataLoading: false
}

export default function currentDisplayedCards(state = initialState, action) {
    switch (action.type) {
        case SET_LOADING:
            return {...state, bIsDataLoading: action.payload.bIsDataLoading}
        case SET_SEARCH_RESULTS:
            return { 
                aDisplayedCards: action.payload.aDisplayedCards,
                oHeaderValues: {
                    bIsFromSet: action.payload.bIsFromSet,
                    sInputValue: action.payload.sInputValue,
                    sTitle: action.payload.sTitle
                },
                bIsDataLoading: action.payload.bIsDataLoading
            }
        default:
            return state
    }
}