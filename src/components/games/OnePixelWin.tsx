'use client';
import { useState, useEffect } from 'react';

export default function OnePixelWin() {
    const [target, setTarget] = useState({ x: 50, y: 50 });
    const [status, setStatus] = useState('Tìm pixel chiến thắng');

    useEffect(() => {
        setTarget({ x: Math.random() * 95 + 2, y: Math.random() * 95 + 2 });
    }, []);

    const handleClick = (e: React.MouseEvent) => {
        setStatus('Hụt rồi! Gần thế mà không trúng.');
    };

    const handleWin = (e: React.MouseEvent) => {
        e.stopPropagation();
        setStatus('KHÔNG THỂ TIN ĐƯỢC! BẠN ĐÃ THẮNG!');
    };

    return (
        <div
            className="game-container"
            style={{ cursor: 'crosshair', position: 'relative', background: '#111' }}
            onClick={handleClick}
        >
            <h2 style={{ pointerEvents: 'none' }}>{status}</h2>
            <div
                style={{
                    position: 'absolute',
                    top: `${target.y}%`,
                    left: `${target.x}%`,
                    width: '1px',
                    height: '1px',
                    background: '#ff0055',
                    cursor: 'pointer'
                }}
                onClick={handleWin}
            ></div>
        </div>
    );
}
