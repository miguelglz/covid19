import ReduxThunk from 'redux-thunk'
import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux'

import PreferencesReducer from './PreferencesReducer'

const reducers = combineReducers({
  preferences: PreferencesReducer
})

export const store = createStore(reducers, applyMiddleware(ReduxThunk))
