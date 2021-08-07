import React from "react";

interface ExchangeRateResultItemProps {
    countryCode: string
    currencyName: string
    currencyValue: number
}

const ExchangeRateResultItem: React.FC<ExchangeRateResultItemProps> = ({countryCode, currencyName, currencyValue}) => {
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