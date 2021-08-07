import * as React from 'react';
import {ChangeEvent, useCallback, useEffect, useState} from 'react';
import Header from "../Header/Header";
import CurrencyListItem from "../CurrencyListItem/CurrencyListItem";
import {useDispatch, useSelector} from "react-redux";
import {getChangeValue} from "../../redux/exchange-reducer";
import debounce from 'lodash.debounce';
import {AppStateType} from "../../redux/store";
import {CurrencyTypes} from "../ExchangeRate/ExchangeRate";
import {ChangeResponseType} from "../../api/exchange-api";


const Exchange: React.FC = () => {

    const exchange = useSelector((state: AppStateType) => state.exchange)

    const [isOpen, setIsOpen] = useState({
        from: false,
        to: false
    })

    const [amount, setAmount] = useState(1)

    const [baseCurrency, setBaseCurrency] = useState(() => {
        let baseCurrency = localStorage.getItem('baseCurrencyFrom') || "RUB"
        let baseCurrencyTo = localStorage.getItem('baseCurrencyTo') || "EUR"
        return {
            'RUB': {from: 'RUB' === baseCurrency, to: 'RUB' === baseCurrencyTo},
            'EUR': {from: 'EUR' === baseCurrency, to: 'EUR' === baseCurrencyTo},
            'USD': {from: 'USD' === baseCurrency, to: 'USD' === baseCurrencyTo},
            'CNY': {from: 'CNY' === baseCurrency, to: 'CNY' === baseCurrencyTo},
        }
    })

    const dispatch = useDispatch()

    const debouncedChange = useCallback(
        debounce((fromCurrencyName, toCurrencyName, amount) => dispatch(getChangeValue(fromCurrencyName, toCurrencyName, amount)), 500), []
    )

    useEffect(() => {
        let fromCurrencyName = null
        let toCurrencyName = null
        Object.keys(baseCurrency).forEach(currencyName => {
            if (baseCurrency[currencyName as CurrencyTypes].to) {
                toCurrencyName = currencyName
            } else if (baseCurrency[currencyName as CurrencyTypes].from) {
                fromCurrencyName = currencyName
            }
        })
        debouncedChange(fromCurrencyName, toCurrencyName, amount)
    }, [baseCurrency, amount])

    const onToCurrencyChange = (currencyName: string) => {
        localStorage.setItem('baseCurrencyTo', currencyName)
        setBaseCurrency(prev => {
            let newState = {...prev}
            Object.keys(newState).forEach(curr => {
                newState[curr as CurrencyTypes].to = curr === currencyName;
            })
            return newState
        })
    }

    const onFromCurrencyChange = (currencyName: string) => {
        localStorage.setItem('baseCurrencyFrom', currencyName)
        setBaseCurrency(prev => {
            let newState = {...prev}
            Object.keys(newState).forEach(curr => {
                newState[curr as CurrencyTypes].from = curr === currencyName;
            })
            return newState
        })
    }

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAmount(parseInt(e.target.value))
    }

    return (
        <div className="page-wrapper">
            <Header title={'Обмен валют'} buttonText={'Курс валют'} buttonHref={'/exchange_rate'}/>
            <main className="main">
                <div className="container">
                    <section className="converter">
                        <h1 className="converter__title">Текущий курс валют</h1>
                        <div className="converter__body">
                            <div className="converter__controls exchange">
                                <input onChange={onChange} type="number" className="input-field" value={amount}/>
                                <div onClick={() => setIsOpen(prev => ({...prev, from: !prev.from}))}
                                     className={"select" + (isOpen.from ? ' open' : '')}>
                                    <div className="select__selected"><span>{Object.keys(baseCurrency).map(curr => {
                                        if (baseCurrency[curr as CurrencyTypes].from) {
                                            return curr
                                        }
                                    })}</span></div>
                                    <ul className="select__list">
                                        {Object.keys(baseCurrency).map((curr, index) => {
                                            if (!baseCurrency[curr as CurrencyTypes].from && !baseCurrency[curr as CurrencyTypes].to) {
                                                return (
                                                    <CurrencyListItem
                                                        key={index}
                                                        clickHandler={onFromCurrencyChange}
                                                        currencyName={curr}
                                                    />
                                                )
                                            }
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className="converter__controls result">
                                <div className={`loading-wrapper` + (exchange.isFetching ? ' loading' : '')}>
                                    <input
                                        type="text"
                                        className="input-field"
                                        value={exchange.changeResult.rates && !exchange.isFetching ? Object.values((exchange.changeResult as ChangeResponseType).rates)[0] as number : ''}
                                        readOnly
                                    />
                                </div>
                                <div onClick={() => setIsOpen(prev => ({...prev, to: !prev.to}))}
                                     className={"select" + (isOpen.to ? ' open' : '')}>
                                    <div className="select__selected"><span>{Object.keys(baseCurrency).map(curr => {
                                        if (baseCurrency[curr as CurrencyTypes].to) {
                                            return curr
                                        }
                                    })}</span></div>
                                    <ul className="select__list">
                                        {Object.keys(baseCurrency).map((curr, index) => {
                                            if (!baseCurrency[curr as CurrencyTypes].to && !baseCurrency[curr as CurrencyTypes].from) {
                                                return (
                                                    <CurrencyListItem
                                                        key={index}
                                                        clickHandler={onToCurrencyChange}
                                                        currencyName={curr}
                                                    />
                                                )
                                            }
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Exchange;