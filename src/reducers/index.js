import { combineReducers } from 'redux'

//Reducers
import currentDisplayedCardsReducer from './displayedCardsReducer'
import currentTitleReducer from './currentTitleReducer'
import currentUserReducer from './currentUserReducer'
import currentUserCollectionReducer from './currentUserCollectionReducer'
import dirtyFlagReducer from './dirtyFlagReducer'
import expansionsListReducer from './expansionsListReducer'

//The keys in the rootReducer are the entities that are call with connect
const rootReducer = combineReducers({
    currentDisplayedCards: currentDisplayedCardsReducer,
    currentTitle: currentTitleReducer,
    currentUser: currentUserReducer,
    currentUserCollection: currentUserCollectionReducer,
    dirtyFlag: dirtyFlagReducer,
    expansionsList: expansionsListReducer
})

export default rootReducer