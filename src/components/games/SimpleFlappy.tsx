'use client';
import { useState, useEffect, useCallback } from 'react';

export default function SimpleFlappy() {
    const [birdPos, setBirdPos] = useState(250);
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);

    const jump = () => {
        if (gameOver) {
            setBirdPos(250);
            setGameOver(false);
            setScore(0);
            return;
        }
        setBirdPos(prev => Math.max(prev - 60, 0));
    };

    useEffect(() => {
        if (gameOver) return;
        const interval = setInterval(() => {
            setBirdPos(prev => {
                if (prev >= 480) {
                    setGameOver(true);
                    return 480;
                }
                return prev + 5;
            });
            setScore(s => s + 1);
        }, 30);
        return () => clearInterval(interval);
    }, [gameOver]);

    return (
        <div className="game-container" style={{ position: 'relative', width: '300px', height: '500px', background: '#4ec0ca', overflow: 'hidden', cursor: 'pointer' }} onClick={jump}>
            <h2 style={{ position: 'absolute', top: 10, width: '100%', textAlign: 'center', zIndex: 10 }}>Chim Ngu: {score}</h2>
            <div style={{
                position: 'absolute',
                top: birdPos,
                left: 50,
                width: '30px',
                height: '30px',
                background: '#ffcc00',
                borderRadius: '50%',
                transition: 'top 0.1s'
            }} />
            <div style={{ position: 'absolute', bottom: 0, width: '100%', height: '20px', background: '#ded895' }} />
            {gameOver && (
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', background: 'rgba(0,0,0,0.8)', padding: '20px', borderRadius: '10px', width: '80%' }}>
                    <h3>GAME OVER</h3>
                    <p>Điểm: {score}</p>
                    <button className="game-button" onClick={jump}>THỬ LẠI</button>
                </div>
            )}
        </div>
    );
}
