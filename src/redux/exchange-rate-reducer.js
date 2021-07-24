import {exchangeAPI} from "../api/exchange-api";

const GET_RATE_SUCCESS = 'GET_RATE_SUCCESS'
const START_CURRENCY_RATE_UPDATE = 'START_CURRENCY_RATE_UPDATE'
const STOP_CURRENCY_RATE_UPDATE = 'START_CURRENCY_RATE_UPDATE'
const GET_COUNTRY_CODES_SUCCESS = 'GET_COUNTRY_CODES_SUCCESS'
const START_FETCHING = 'START_FETCHING'
const STOP_FETCHING = 'STOP_FETCHING'

const initialState = {
    exchangeRateResult: {
        amount: 1,
        base: null,
        date: null,
        rates: {}
    },
    countryCodes: {},
    isFetching: false,
    isCurrencyUpdate: false
}

export const exchangeRateReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case GET_RATE_SUCCESS: {
            return {...state, exchangeRateResult: {...payload, rates: {...payload.rates}}}
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

const startFetching = () => {
    return {
        type: START_FETCHING
    }
}

const stopFetching = () => {
    return {
        type: STOP_FETCHING
    }
}

const startCurrencyRateUpdate = () => {
    return {
        type: START_CURRENCY_RATE_UPDATE
    }
}

const getExchangeRateSuccess = (payload) => {
    return {
        type: GET_RATE_SUCCESS,
        payload
    }
}


export const getCurrencyRate = (baseCurrency) => async (dispatch) => {
    dispatch(startFetching())
    const response = await exchangeAPI.getCurrencyRate(baseCurrency)
    dispatch(getExchangeRateSuccess(response))
    dispatch(stopFetching())
}


