import React from "react";

interface CurrencyListItem {
    clickHandler: (currencyName: string) => void,
    currencyName: string
}

const CurrencyListItem: React.FC<CurrencyListItem> = ({clickHandler, currencyName}) => {
    return (
        <li
            onClick={() => clickHandler(currencyName)}
            className="select__item">
            <span>{currencyName}</span>
        </li>
    );
};

export default CurrencyListItem;