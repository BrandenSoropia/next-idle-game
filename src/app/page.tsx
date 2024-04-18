"use client";

import GameManager from "./_components/game-manager";
import { useEffect, useState } from "react";

export default function Home() {
  const [gameManger, setGameManager] = useState<GameManager>();

  useEffect(() => {
    if (!gameManger) {
      console.log("### Initializing Game Manager");

      const newGameManager = new GameManager(Date.now());

      setGameManager(newGameManager);
    }
  }, [gameManger]);

  return (
    <main>
      <button
        onClick={() => {
          gameManger?.printGameState();
        }}
      >
        Print Game State
      </button>
    </main>
  );
}
