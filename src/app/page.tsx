"use client";

import Stats from "./_components/Stats";
import GameStateProvider from "./_game-state/GameState";

export default function Home() {
  return (
    <main>
      <GameStateProvider>
        <Stats />
      </GameStateProvider>
    </main>
  );
}
