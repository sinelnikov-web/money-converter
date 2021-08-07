import {ChangeResponseType, exchangeAPI} from "../api/exchange-api";
import {Dispatch} from "redux";

const GET_RATE_SUCCESS = 'GET_RATE_SUCCESS'
const START_CURRENCY_RATE_UPDATE = 'START_CURRENCY_RATE_UPDATE'
const STOP_CURRENCY_RATE_UPDATE = 'START_CURRENCY_RATE_UPDATE'
const GET_COUNTRY_CODES_SUCCESS = 'GET_COUNTRY_CODES_SUCCESS'
const START_FETCHING = 'START_FETCHING'
const STOP_FETCHING = 'STOP_FETCHING'

const initialState = {
    exchangeRateResult: {
        amount: 1,
        base: '',
        date: '',
        rates: {}
    } as ChangeResponseType,
    countryCodes: {},
    isFetching: false,
    isCurrencyUpdate: false
}

export type InitialStateType = typeof initialState

export const exchangeRateReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    const {type, payload} = action
    switch (type) {
        case GET_RATE_SUCCESS: {
            return <InitialStateType>{...state, exchangeRateResult: {...payload, rates: {...payload?.rates}}}
        }
        case START_CURRENCY_RATE_UPDATE: {
            return {...state, isCurrencyUpdate: true}
        }
        case STOP_CURRENCY_RATE_UPDATE: {
            return {...state, isCurrencyUpdate: false}
        }
        case GET_COUNTRY_CODES_SUCCESS: {
            return {...state, countryCodes: {...payload}}
        }
        case START_FETCHING: {
            return {...state, isFetching: true}
        }
        case STOP_FETCHING: {
            return {...state, isFetching: false}
        }
        default: {
            return state
        }
    }
}

const actions = {
    startFetching: () => {
        return {
            type: START_FETCHING
        }
    },
    stopFetching: () => {
        return {
            type: STOP_FETCHING
        }
    },
    startCurrencyRateUpdate: () => {
        return {
            type: START_CURRENCY_RATE_UPDATE
        }
    },
    getExchangeRateSuccess: (payload: ChangeResponseType) => {
        return {
            type: GET_RATE_SUCCESS,
            payload
        }
    }
}

type ActionsTypes = 'STOP_FETCHING' | 'START_FETCHING' | 'GET_COUNTRY_CODES_SUCCESS' | 'START_CURRENCY_RATE_UPDATE' | 'GET_RATE_SUCCESS'

type ActionType = {
    type: ActionsTypes,
    payload?: ChangeResponseType
}

export const getCurrencyRate = (baseCurrency: string) => async (dispatch: Dispatch) => {
    dispatch(actions.startFetching())
    const response = await exchangeAPI.getCurrencyRate(baseCurrency)
    dispatch(actions.getExchangeRateSuccess(response))
    dispatch(actions.stopFetching())
}


