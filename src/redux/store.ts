import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import {exchangeRateReducer} from "./exchange-rate-reducer";
import {exchangeReudcer} from "./exchange-reducer";

const rootReducer = combineReducers({
    exchangeRate: exchangeRateReducer,
    exchange: exchangeReudcer
})

type RootReducerType = typeof rootReducer

export type AppStateType = ReturnType<RootReducerType>

type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never

export type InferActionTypes<T extends {[key: string]: (...args: any[]) => any }> = ReturnType<PropertiesTypes<T>>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

// @ts-ignore
window.__store__ = store

export default store