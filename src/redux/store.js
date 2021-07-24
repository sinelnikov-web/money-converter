import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import {exchangeRateReducer} from "./exchange-rate-reducer";
import {exchangeReudcer} from "./exchange-reducer";

const rootReducer = combineReducers({
    exchangeRate: exchangeRateReducer,
    exchange: exchangeReudcer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

window.__store__ = store

export default store