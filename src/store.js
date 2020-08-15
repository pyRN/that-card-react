import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const initialState = {}
const middleware = [thunk]

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    require("redux-devtools").devTools(),
    require("redux-devtools").persistState(
      window.location.href.match(/[?&]debug_session=([^&]+)\b/)
    )
  )
);


export default store
