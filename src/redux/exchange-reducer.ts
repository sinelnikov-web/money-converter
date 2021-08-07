import {ChangeResponseType, exchangeAPI} from "../api/exchange-api";
import {Dispatch} from "redux";
import {InferActionTypes} from "./store";

const START_FETCHING = 'START_FETCHING'
const STOP_FETCHING = 'STOP_FETCHING'
const START_UPDATING = 'START_UPDATING'
const STOP_UPDATING = 'STOP_UPDATING'
const CHANGE_SUCCESS = 'CHANGE_SUCCESS'

const initialState = {
    isFetching: false,
    isUpdating: false,
    changeResult: {
        rates: {}
    }
}

type InitialStateType = typeof initialState

export const exchangeReudcer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    const {type, payload} = action
    switch (type) {
        case CHANGE_SUCCESS: {
            return {...state, changeResult: {rates: {...payload}}}
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

const actions = {
    startFetching: (): ActionType => {
        return {
            type: START_FETCHING
        }
    },
    stopFetching: (): ActionType => {
        return {
            type: STOP_FETCHING
        }
    },
    changeCurrencySuccess: (payload: ChangeResponseType): ActionType => {
        return {
            type: CHANGE_SUCCESS,
            payload: payload
        }
    }
}

type ActionsTypes = 'CHANGE_SUCCESS' | 'STOP_UPDATING' | 'STOP_FETCHING' | 'START_UPDATING' | 'START_FETCHING'

type ActionType = {
    type: ActionsTypes
    payload?: ChangeResponseType
}


export const getChangeValue = (fromCurrencyName: string, toCurrencyName: string, amount: number=1) => async (dispatch: Dispatch) => {
    dispatch(actions.startFetching())
    const response = await exchangeAPI.getChangeValue(fromCurrencyName, toCurrencyName, amount)
    dispatch(actions.changeCurrencySuccess(response))
    dispatch(actions.stopFetching())
}