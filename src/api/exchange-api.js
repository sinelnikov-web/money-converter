import axios from "axios";


const APIInstance = axios.create({
    baseURL: 'https://api.frankfurter.app/'
})

export const exchangeAPI = {
    getCurrencyRate: (baseCurrency) => {
        return APIInstance.get(`latest?from=${baseCurrency}`).then(r => r.data)
    },
    getChangeValue: (fromCurrencyName, toCurrencyName, amount) => {
        return APIInstance.get(`latest?amount=${amount}&from=${fromCurrencyName}&to=${toCurrencyName}`).then(r => r.data)
    },
    getCountryCodes: () => {
        return axios.get('http://localhost:3000/assets/json/currency.json', {
            withCredentials: true
        }).then(r => r.data)
    }
}