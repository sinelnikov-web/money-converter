import {exchangeAPI} from "../api/exchange-api";

const START_FETCHING = 'START_FETCHING'
const STOP_FETCHING = 'STOP_FETCHING'
const START_UPDATING = 'START_UPDATING'
const STOP_UPDATING = 'STOP_UPDATING'
const CHANGE_SUCCESS = 'CHANGE_SUCCESS'

const initialState = {
    isFetching: false,
    isUpdating: false,
    changeResult: {
        rates: null
    }
}

export const exchangeReudcer = (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case CHANGE_SUCCESS: {
            return {...state, changeResult: {rates: {...payload.rates}}}
        }
        case START_FETCHING: {
            return {...state, isFetching: true}
        }
        case STOP_FETCHING: {
            return {...state, isFetching: false}
        }
        case START_UPDATING: {
            return {...state, isUpdating: true}
        }
        case STOP_UPDATING: {
            return {...state, isUpdating: false}
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

const changeCurrencySuccess = (payload) => {
    return {
        type: CHANGE_SUCCESS,
        payload
    }
}

export const getChangeValue = (fromCurrencyName, toCurrencyName, amount=1) => async (dispatch) => {
    dispatch(startFetching())
    const response = await exchangeAPI.getChangeValue(fromCurrencyName, toCurrencyName, amount)
    dispatch(changeCurrencySuccess(response))
    dispatch(stopFetching())
}