'use client';
import { useState, useEffect } from 'react';

export default function AlmostDone() {
    const [dots, setDots] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setDots(prev => prev.length >= 3 ? '' : prev + '.');
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="game-container">
            <h2 style={{ color: '#ffcc00' }}>Sắp xong rồi... 99%</h2>
            <div style={{ width: '100%', height: '10px', background: '#333', borderRadius: '5px', overflow: 'hidden', margin: '20px 0' }}>
                <div style={{ width: '99%', height: '100%', background: '#ffcc00' }}></div>
            </div>
            <p>Đang tải dữ liệu cuối cùng{dots}</p>
            <p style={{ fontSize: '0.8rem', opacity: 0.6, marginTop: '20px' }}>Vui lòng không tắt trình duyệt.</p>
        </div>
    );
}
