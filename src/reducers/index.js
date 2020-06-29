import { combineReducers } from 'redux'

//Reducers
import displayedCardsReducer from './displayedCardsReducer'
import currentUserReducer from './currentUserReducer'
import currentUserCollectionReducer from './currentUserCollectionReducer'
import dirtyFlagReducer from './dirtyFlagReducer'
import expansionsListReducer from './expansionsListReducer'

//The keys in the rootReducer are the entities that are call with useSelector Hook
const rootReducer = combineReducers({
    oDisplayedCardsReducer: displayedCardsReducer,
    oCurrentUserReducer: currentUserReducer,
    oCurrentUserCollectionReducer: currentUserCollectionReducer,
    oDirtyFlagReducer: dirtyFlagReducer,
    oExpansionsListReducer: expansionsListReducer
})

export default rootReducer