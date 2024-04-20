import { useContext } from "react";
import { GameStateContext } from "../_game-state/GameState";

const Stats = () => {
  const gameState = useContext(GameStateContext);
  return (
    <div>
      <ul>Experience Points: {gameState.experiencePoints}</ul>
    </div>
  );
};

export default Stats;
