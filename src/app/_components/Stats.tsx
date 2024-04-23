import { useContext } from "react";
import { GameStateContext } from "../_game-state/GameState";

const Stats = () => {
  const gameState = useContext(GameStateContext);
  return (
    <div>
      <ul>
        <li>Experience Points: {gameState.experiencePoints}</li>
        <li>Digimoney: {gameState.digimoney}</li>
      </ul>
    </div>
  );
};

export default Stats;
