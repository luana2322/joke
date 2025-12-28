'use client';
import { useState } from "react";
import Image from "next/image";
import DontClick from "@/components/games/DontClick";
import AlmostWinning from "@/components/games/AlmostWinning";
import FakeExit from "@/components/games/FakeExit";
import ClickButSlower from "@/components/games/ClickButSlower";
import LyingButton from "@/components/games/LyingButton";
import OnePixelWin from "@/components/games/OnePixelWin";
import LagSimulator from "@/components/games/LagSimulator";
import WrongChoice from "@/components/games/WrongChoice";
import AlmostDone from "@/components/games/AlmostDone";
import SimpleSnake from "@/components/games/SimpleSnake";
import SimpleFlappy from "@/components/games/SimpleFlappy";

const games = [
  { id: 'snake', name: '7️⃣ Snake Game 🐍', component: SimpleSnake },
  { id: 'flappy', name: 'Flappy Bird 🐦', component: SimpleFlappy },
  { id: 'dontclick', name: '1️⃣ Don’t Click ❌', component: DontClick },
  { id: 'almost', name: 'Almost Winning 😏', component: AlmostWinning },
  { id: 'exit', name: '3️⃣ Fake Exit 🚪', component: FakeExit },
  { id: 'slower', name: 'Click But Slower 🐢', component: ClickButSlower },
  { id: 'lying', name: '5️⃣ The Button Lies 🤥', component: LyingButton },
  { id: 'pixel', name: '6️⃣ One Pixel Win 🧊', component: OnePixelWin },
  { id: 'lag', name: '7️⃣ Lag Simulator 🌀', component: LagSimulator },
  { id: 'choice', name: '8️⃣ Wrong Choice 🎭', component: WrongChoice },
  { id: 'done', name: '9️⃣ You Almost Did It 🎉', component: AlmostDone },
];

export default function Home() {
  const [activeGame, setActiveGame] = useState<string | null>(null);
  const [showBoom, setShowBoom] = useState(false);

  const CurrentGame = games.find(g => g.id === activeGame)?.component;

  const handleAlmostComplete = () => {
    setShowBoom(true);
    setTimeout(() => {
      setShowBoom(false);
      setActiveGame(null);
    }, 3000);
  };

  return (
    <div className="container" style={{ maxHeight: '95vh', overflowY: 'auto', padding: '60px 20px' }}>
      <h1 className="title">Fuck you</h1>

      <div className="image-wrapper" style={{ margin: '2rem 0' }}>
        <Image
          src="/joke.jpg"
          alt="Joke"
          width={600}
          height={600}
          priority
          style={{
            maxWidth: '100%',
            height: 'auto',
            display: 'block',
          }}
        />
      </div>

      <div className="game-grid">
        {games.map(game => (
          <div key={game.id} className="game-launcher" onClick={() => setActiveGame(game.id)}>
            {game.name}
          </div>
        ))}
      </div>

      {activeGame && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setActiveGame(null)}>×</button>
            {CurrentGame && <CurrentGame onComplete={handleAlmostComplete} />}
          </div>
        </div>
      )}

      {showBoom && (
        <div className="modal-overlay" style={{ background: 'white' }}>
          <h1 style={{ color: 'black', fontSize: '10rem' }}>BOOM! 💥</h1>
        </div>
      )}
    </div>
  );
}
