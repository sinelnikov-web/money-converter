import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import countryCodesToCurrencyCodes from '../../assets/json/currency.json'
import Header from "../Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {getCountryCodes, getCurrencyRate} from "../../redux/exchange-rate-reducer";
import CurrencyListItem from "../CurrencyListItem/CurrencyListItem";
import ExchangeRateResultItem from "./ExchangeRateResultItem/ExchangeRateResultItem";

const ExchangeRate = () => {

    const currencyCodesToCountryCodes = {}
    Object.keys(countryCodesToCurrencyCodes).forEach(code => currencyCodesToCountryCodes[countryCodesToCurrencyCodes[code]] = code)

    const exchangeRate = useSelector(state => state.exchangeRate)

    const rates = exchangeRate.exchangeRateResult.rates

    const [isOpen, setIsOpen] = useState(false)

    const [baseCurrency, setBaseCurrency] = useState(() => {
        let baseCurrency = localStorage.getItem('baseCurrency') || "RUB"
        return {
            'RUB': 'RUB' === baseCurrency,
            'EUR': 'EUR' === baseCurrency,
            'USD': 'USD' === baseCurrency,
            'CNY': 'CNY' === baseCurrency,
        }
    })


    const dispatch = useDispatch()

    useEffect(() => {
        Object.keys(baseCurrency).map(curr => {
            if (baseCurrency[curr]) {
                dispatch(getCurrencyRate(curr))
            }
        })
    }, [])

    const onBaseCurrencyChange = (currencyName) => {
        dispatch(getCurrencyRate(currencyName))
        localStorage.setItem('baseCurrency', currencyName)
        setBaseCurrency(prev => {
            let newState = {...prev}
            Object.keys(newState).forEach(curr => {
                newState[curr] = curr === currencyName;
            })
            return newState
        })
    }

    return (
        <div className="page-wrapper">
            <Header title={'Курс валют'} buttonText={'Обмен валют'} buttonHref={'/exchange'}/>
            <main className="main">
                <div className="container">
                    <section className="converter">
                        <h1 className="converter__title">Текущий курс валют</h1>
                        <div className="converter__body">
                            <div className="converter__controls">
                                <input type="text" className="input-field" value="1" readOnly/>
                                <div onClick={() => setIsOpen(!isOpen)} className={"select" + (isOpen ? ' open' : '')}>
                                    <div className="select__selected"><span>{Object.keys(baseCurrency).map(curr => {
                                        if (baseCurrency[curr]) {
                                            return curr
                                        }
                                    })}</span></div>
                                    <ul className="select__list">
                                        {Object.keys(baseCurrency).map((curr, index) => {
                                            if (!baseCurrency[curr]) {
                                                return (
                                                    <CurrencyListItem
                                                        key={index}
                                                        clickHandler={onBaseCurrencyChange}
                                                        currencyName={curr}
                                                    />
                                                )
                                            }
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className="converter__results">
                                <ul className="converter__list">
                                    {exchangeRate.isFetching
                                        ?
                                        <div className={`loading-wrapper` + (exchangeRate.isFetching ? ' loading' : '')}/>
                                            :
                                            Object.keys(rates).map((rateName, index) => {
                                            return (
                                                <ExchangeRateResultItem
                                                    key={index}
                                                    currencyName={rateName}
                                                    currencyValue={rates[rateName]}
                                                    countryCode={currencyCodesToCountryCodes[rateName]}
                                                />
                                            )
                                        })}
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default ExchangeRate;