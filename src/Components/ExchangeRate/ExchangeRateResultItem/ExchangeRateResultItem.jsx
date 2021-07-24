import React from 'react';

const ExchangeRateResultItem = ({countryCode, currencyName, currencyValue}) => {
    return (
        <li className="converter__item">
            <img
                src={`https://www.countryflags.io/${countryCode}/flat/64.png`}
                alt="" className="converter__flag"/>
            <span className="converter__currency">{currencyName}</span>
            <span className="converter__value">{currencyValue}</span>
        </li>
    );
};

export default ExchangeRateResultItem;