import React, { useState } from 'react';
import './MoneyConverter.css';

const MoneyConverter = () => {
    const [amount, setAmount] = useState('');
    const [currencyFrom, setCurrencyFrom] = useState('USD');
    const [currencyTo, setCurrencyTo] = useState('EUR');
    const [convertedAmount, setConvertedAmount] = useState(null);

    const exchangeRates = {
        USD: { EUR: 0.85, GBP: 0.75 },
        EUR: { USD: 1.18, GBP: 0.88 },
        GBP: { USD: 1.33, EUR: 1.13 },
    };

    const handleConversion = () => {
        const rate = exchangeRates[currencyFrom][currencyTo];
        setConvertedAmount((amount * rate).toFixed(2));
    };

    return (
        <div className="converter-container d-flex flex-column gap-3 shadow " style={{ margin: "50px auto", marginTop: "3rem", width: "68%" }}>
            <h2 className='mt-3 text-center'>Currency Converter</h2>
            <div className='d-flex gap-2 p-3 justify-content-center align-items-center'>
                <p className='pt-3'>from:</p>
                <select value={currencyFrom} onChange={(e) => setCurrencyFrom(e.target.value)}>
                    {Object.keys(exchangeRates).map((currency) => (
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                </select>
                <p className='pt-3 '>To:</p>
                <select value={currencyTo} onChange={(e) => setCurrencyTo(e.target.value)}>
                    {Object.keys(exchangeRates).map((currency) => (
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                </select>
            </div>

            <input
                className='w-50 '
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount"
            />

            <button onClick={handleConversion}>Convert</button>
            <div>
                <h1> {convertedAmount}</h1>
            </div>
        </div>
    );
};

export default MoneyConverter;