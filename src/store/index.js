import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import { systemReducer } from './system.reducer.js';

import { colorReducer } from './color.reducer.js'

const rootReducer = combineReducers({
   colorModule: colorReducer,
   systemModule: systemReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
