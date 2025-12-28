'use client';
import { useState } from 'react';

export default function LagSimulator() {
    const [count, setCount] = useState(0);
    const [isLagging, setIsLagging] = useState(false);

    const handleClick = () => {
        setIsLagging(true);
        setTimeout(() => {
            setCount(prev => prev + 1);
            setIsLagging(false);
        }, 1500 + Math.random() * 1000);
    };

    return (
        <div className="game-container">
            <h2>Mạng hơi kém...</h2>
            <p style={{ fontSize: '2rem' }}>{count}</p>
            <button
                className="game-button"
                onClick={handleClick}
                disabled={isLagging}
                style={{ opacity: isLagging ? 0.5 : 1 }}
            >
                {isLagging ? 'Đang kết nối...' : 'BẤM ĐỂ TĂNG'}
            </button>
            {isLagging && <p style={{ marginTop: '10px' }}>Loading... 🌀</p>}
        </div>
    );
}
