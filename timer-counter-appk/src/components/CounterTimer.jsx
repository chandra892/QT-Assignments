import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState(60); // Set initial countdown time in seconds
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let timer;
        if (isActive && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft(prevTime => prevTime - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsActive(false);
        }

        return () => clearInterval(timer); // Cleanup the interval on component unmount
    }, [isActive, timeLeft]);

    const startTimer = () => {
        setIsActive(true);
    };

    const resetTimer = () => {
        setIsActive(false);
        setTimeLeft(60); // Reset to initial time
    };

    return (
        <div style={{
            textAlign: 'center',
            marginTop: '50px',
            backgroundColor: '#f0f0f0',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        }}>
            <h1 style={{ fontSize: '36px', marginBottom: '10px' }}>Countdown Timer</h1>
            <h2 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px' }}>{timeLeft} seconds</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '200px', margin: '0 auto' }}>
                <button
                    style={{
                        padding: '10px 20px',
                        fontSize: '16px',
                        borderRadius: '5px',
                        border: 'none',
                        backgroundColor: isActive ? '#ccc' : '#4CAF50',
                        color: '#fff',
                        cursor: 'pointer',
                    }}
                    onClick={startTimer}
                    disabled={isActive}
                >
                    Start
                </button>
                <button
                    style={{
                        padding: '10px 20px',
                        fontSize: '16px',
                        borderRadius: '5px',
                        border: 'none',
                        backgroundColor: '#e74c3c',
                        color: '#fff',
                        cursor: 'pointer',
                    }}
                    onClick={resetTimer}
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default CountdownTimer;