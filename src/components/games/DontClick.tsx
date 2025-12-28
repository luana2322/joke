'use client';
import { useState, useEffect } from 'react';

export default function DontClick() {
    const [position, setPosition] = useState({ top: '50%', left: '50%' });
    const [message, setMessage] = useState('ĐỪNG BẤM');

    const moveButton = () => {
        const top = Math.random() * 80 + 10 + '%';
        const left = Math.random() * 80 + 10 + '%';
        setPosition({ top, left });
    };

    const handleClick = () => {
        setMessage('THUA RỒI! SAO BẢO ĐỪNG BẤM MÀ?');
        setTimeout(() => setMessage('ĐỪNG BẤM'), 2000);
    };

    return (
        <div className="game-container">
            <h2 style={{ marginBottom: '20px' }}>{message}</h2>
            <button
                style={{
                    position: 'absolute',
                    top: position.top,
                    left: position.left,
                    padding: '15px 30px',
                    fontSize: '1.2rem',
                    backgroundColor: '#ff0055',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.1s ease',
                    transform: 'translate(-50%, -50%)'
                }}
                onMouseEnter={moveButton}
                onClick={handleClick}
            >
                CLICK ME
            </button>
        </div>
    );
}
