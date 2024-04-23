"use client";

import Link from "next/link";
import Clicker from "./_components/Clicker";
import Stats from "./_components/Stats";
import GameStateProvider from "./_game-state/GameState";

export default function Home() {
  return (
    <main>
      <GameStateProvider>
        <Stats />
        <Clicker />
        <Link href="/store">Go to Store</Link>
      </GameStateProvider>
    </main>
  );
}
