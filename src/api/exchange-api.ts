import axios from "axios";


const APIInstance = axios.create({
    baseURL: 'https://api.frankfurter.app/'
})

export type ChangeResponseType = {
    amount: number
    base: string,
    date: string,
    rates: {
        RUB: number,
        EUR: number,
        USD: number,
        CNY: number,
    },
}

export const exchangeAPI = {
    getCurrencyRate: (baseCurrency: string) => {
        return APIInstance.get<ChangeResponseType>(`latest?from=${baseCurrency}`).then(r => r.data)
    },
    getChangeValue: (fromCurrencyName: string, toCurrencyName: string, amount: number) => {
        return APIInstance.get<ChangeResponseType>(`latest?amount=${amount}&from=${fromCurrencyName}&to=${toCurrencyName}`).then(r => r.data)
    },
    getCountryCodes: () => {
        return axios.get('http://localhost:3000/assets/json/currency.json', {
            withCredentials: true
        }).then(r => r.data)
    }
}