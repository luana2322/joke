'use client';
import { useState, useEffect, useCallback } from 'react';

const GRID_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION = { x: 0, y: -1 };

export default function SimpleSnake() {
    const [snake, setSnake] = useState(INITIAL_SNAKE);
    const [food, setFood] = useState({ x: 5, y: 5 });
    const [direction, setDirection] = useState(INITIAL_DIRECTION);
    const [gameOver, setGameOver] = useState(false);

    const moveSnake = useCallback(() => {
        if (gameOver) return;

        const newHead = {
            x: (snake[0].x + direction.x + GRID_SIZE) % GRID_SIZE,
            y: (snake[0].y + direction.y + GRID_SIZE) % GRID_SIZE,
        };

        if (snake.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
            setGameOver(true);
            return;
        }

        const newSnake = [newHead, ...snake];
        if (newHead.x === food.x && newHead.y === food.y) {
            setFood({
                x: Math.floor(Math.random() * GRID_SIZE),
                y: Math.floor(Math.random() * GRID_SIZE),
            });
        } else {
            newSnake.pop();
        }
        setSnake(newSnake);
    }, [snake, direction, food, gameOver]);

    useEffect(() => {
        const interval = setInterval(moveSnake, 150);
        return () => clearInterval(interval);
    }, [moveSnake]);

    useEffect(() => {
        const handleKeydown = (e: KeyboardEvent) => {
            switch (e.key) {
                case 'ArrowUp': if (direction.y === 0) setDirection({ x: 0, y: -1 }); break;
                case 'ArrowDown': if (direction.y === 0) setDirection({ x: 0, y: 1 }); break;
                case 'ArrowLeft': if (direction.x === 0) setDirection({ x: -1, y: 0 }); break;
                case 'ArrowRight': if (direction.x === 0) setDirection({ x: 1, y: 0 }); break;
            }
        };
        window.addEventListener('keydown', handleKeydown);
        return () => window.removeEventListener('keydown', handleKeydown);
    }, [direction]);

    return (
        <div className="game-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2>Rắn Săn Mồi (Bản nâng cấp: Chậm vch)</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
                width: '300px',
                height: '300px',
                border: '2px solid #333',
                background: '#000'
            }}>
                {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => {
                    const x = i % GRID_SIZE;
                    const y = Math.floor(i / GRID_SIZE);
                    const isSnake = snake.some(s => s.x === x && s.y === y);
                    const isFood = food.x === x && food.y === y;
                    return (
                        <div key={i} style={{
                            background: isSnake ? '#00ff00' : isFood ? '#ff0000' : 'transparent',
                            borderRadius: '2px'
                        }} />
                    );
                })}
            </div>
            {gameOver && <button className="game-button" onClick={() => { setSnake(INITIAL_SNAKE); setGameOver(false); }}>CHƠI LẠI</button>}
        </div>
    );
}
