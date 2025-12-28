'use client';
import { useState } from 'react';

export default function WrongChoice() {
    const [message, setMessage] = useState('Chọn một bên để thắng');

    const handleChoice = () => {
        setMessage(Math.random() > 0.5 ? 'Sai lầm! Bên kia mới đúng.' : 'Vẫn sai! Thử lại xem.');
    };

    return (
        <div className="game-container">
            <h2>{message}</h2>
            <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
                <button className="game-button" onClick={handleChoice} style={{ background: '#333' }}>BÊN TRÁI</button>
                <button className="game-button" onClick={handleChoice} style={{ background: '#333' }}>BÊN PHẢI</button>
            </div>
        </div>
    );
}
