import React, { useState } from 'react';
import './TemperatureConverter.css';

const TemperatureConverter = () => {
    const [temperature, setTemperature] = useState('');
    const [unitFrom, setUnitFrom] = useState('Celsius');
    const [unitTo, setUnitTo] = useState('Fahrenheit');
    const [convertedTemperature, setConvertedTemperature] = useState(null);

    const handleConversion = () => {
        let result;
        if (unitFrom === 'Celsius' && unitTo === 'Fahrenheit') {
            result = (temperature * 9/5) + 32;
        } else if (unitFrom === 'Fahrenheit' && unitTo === 'Celsius') {
            result = (temperature - 32) * 5/9;
        } else if (unitFrom === 'Celsius' && unitTo === 'Kelvin') {
            result = parseFloat(temperature) + 273.15;
        } else if (unitFrom === 'Kelvin' && unitTo === 'Celsius') {
            result = temperature - 273.15;
        } else if (unitFrom === 'Fahrenheit' && unitTo === 'Kelvin') {
            result = (temperature - 32) * 5/9 + 273.15;
        } else if (unitFrom === 'Kelvin' && unitTo === 'Fahrenheit') {
            result = (temperature - 273.15) * 9/5 + 32;
        } else {
            result = temperature; // Same unit conversion
        }
        setConvertedTemperature(result.toFixed(2));
    };

    return (
        <div className="converter-container">
            <h2>Temperature Converter</h2>
            <input
                type="number"
                value={temperature}
                onChange={(e) => setTemperature(e.target.value)}
                placeholder="Temperature"
            />
            <select value={unitFrom} onChange={(e) => setUnitFrom(e.target.value)}>
                <option value="Celsius">Celsius</option>
                <option value="Fahrenheit">Fahrenheit</option>
                <option value="Kelvin">Kelvin</option>
            </select>
            <span> to </span>
            <select value={unitTo} onChange={(e) => setUnitTo(e.target.value)}>
                <option value="Celsius">Celsius</option>
                <option value="Fahrenheit">Fahrenheit</option>
                <option value="Kelvin">Kelvin</option>
            </select>
            <button onClick={handleConversion}>Convert</button>
            {convertedTemperature !== null && (
                <h3>{temperature}° {unitFrom} = {convertedTemperature}° {unitTo}</h3>
            )}
        </div>
    );
};

export default TemperatureConverter;