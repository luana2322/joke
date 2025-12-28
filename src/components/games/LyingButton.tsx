'use client';
import { useState } from 'react';

export default function LyingButton() {
    const [score, setScore] = useState(0);
    const [history, setHistory] = useState<string[]>([]);

    const handleClick = (value: number) => {
        const actualValue = -Math.abs(value);
        setScore(prev => prev + actualValue);
        setHistory(prev => [`Lừa chưa? +${value} mà bị ${actualValue}`, ...prev].slice(0, 3));
    };

    return (
        <div className="game-container">
            <h2>Điểm hiện tại: {score}</h2>
            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                <button className="game-button" onClick={() => handleClick(10)}>+10 ĐIỂM</button>
                <button className="game-button" onClick={() => handleClick(50)}>+50 ĐIỂM</button>
            </div>
            <div style={{ marginTop: '20px', fontSize: '0.9rem', color: '#ff0055' }}>
                {history.map((h, i) => <p key={i}>{h}</p>)}
            </div>
        </div>
    );
}
