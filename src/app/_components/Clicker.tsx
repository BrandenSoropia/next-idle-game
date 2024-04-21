import { useContext } from "react";
import { GameStateContext } from "../_game-state/GameState";

const Clicker = () => {
  const { gainExperience } = useContext(GameStateContext);
  return <button onClick={gainExperience}>Gain EXP</button>;
};

export default Clicker;
