'use client';
import { useState } from 'react';

export default function AlmostWinning({ onComplete }: { onComplete: () => void }) {
    const [progress, setProgress] = useState(0);

    const handleClick = () => {
        if (progress >= 95) {
            setProgress(0);
        } else {
            setProgress(prev => Math.min(prev + Math.random() * 10, 99));
        }

        if (progress >= 99 && Math.random() > 0.9) {
            onComplete();
        }
    };

    return (
        <div className="game-container">
            <h2>Click liên tục để thắng</h2>
            <div style={{ width: '100%', height: '30px', background: '#333', borderRadius: '15px', overflow: 'hidden', margin: '20px 0' }}>
                <div style={{ width: `${progress}%`, height: '100%', background: 'linear-gradient(90deg, #ff0055, #ffcc00)', transition: 'width 0.1s' }}></div>
            </div>
            <p>{progress.toFixed(1)}%</p>
            <button className="game-button" onClick={handleClick}>CLICK HERE</button>
            <p style={{ marginTop: '10px', fontSize: '0.8rem', opacity: 0.6 }}>Chạm 100% để nổ bùm!</p>
        </div>
    );
}
