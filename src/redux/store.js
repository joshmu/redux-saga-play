import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";
import createSagaMiddleware from 'redux-saga'

import rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)

export const action = type => store.dispatch(({type}))

export default store