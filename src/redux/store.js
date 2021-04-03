import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import characterReducer from './character/character.reducer'
import watcherSaga from './character/character.sagas'


const sagaMiddleware = createSagaMiddleware();

const middlewares = [logger, sagaMiddleware]

export const store = createStore(characterReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(watcherSaga)

export default store;