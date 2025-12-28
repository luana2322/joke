'use client';
import { useState, useRef } from 'react';

export default function ClickButSlower() {
    const [score, setScore] = useState(0);
    const lastClick = useRef(Date.now());

    const handleClick = () => {
        const now = Date.now();
        const diff = now - lastClick.current;
        lastClick.current = now;

        if (diff < 500) {
            setScore(prev => prev - 1);
        } else if (diff > 1500) {
            setScore(prev => prev + 5);
        } else {
            setScore(prev => prev + 1);
        }
    };

    return (
        <div className="game-container">
            <h2>Càng nhanh càng ít điểm</h2>
            <p style={{ fontSize: '3rem', fontWeight: 'bold' }}>{score}</p>
            <button className="game-button" onClick={handleClick}>CLICK CHẬM THÔI</button>
            <p style={{ marginTop: '10px' }}>{score < 0 ? 'Bấm nhanh quá rồi đấy!' : 'Đúng rồi, chậm lại...'}</p>
        </div>
    );
}
