import React from 'react';

const CurrencyListItem = ({clickHandler, currencyName}) => {
    return (
        <li
            onClick={() => clickHandler(currencyName)}
            className="select__item">
            <span>{currencyName}</span>
        </li>
    );
};

export default CurrencyListItem;