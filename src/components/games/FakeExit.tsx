'use client';
import { useState } from 'react';

export default function FakeExit() {
    const [position, setPosition] = useState({ top: '50%', left: '50%' });

    const handleClick = () => {
        const top = Math.random() * 80 + 10 + '%';
        const left = Math.random() * 80 + 10 + '%';
        setPosition({ top, left });
    };

    return (
        <div className="game-container">
            <h2>Cố mà thoát ra đi</h2>
            <button
                style={{
                    position: 'absolute',
                    top: position.top,
                    left: position.left,
                    padding: '10px 20px',
                    backgroundColor: '#444',
                    color: 'white',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    transform: 'translate(-50%, -50%)',
                    transition: 'all 0.05s'
                }}
                onClick={handleClick}
            >
                THOÁT
            </button>
        </div>
    );
}
