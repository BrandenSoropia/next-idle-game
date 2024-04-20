import React, {
  MutableRefObject,
  createContext,
  useContext,
  useState,
} from "react";
import {
  BASE_EXPERIENCE_GAIN_RATE,
  INITIAL_EXPERIENCE_POINTS_AMOUNT,
} from "./constants";
import useSetupTimer from "./useSetupTimer";

type GameState = {
  intervalId?: MutableRefObject<NodeJS.Timeout | undefined>;
  experiencePoints: number;
  experienceGainRate: number;
};

const INITIAL_GAME_STATE: GameState = {
  intervalId: undefined,
  experiencePoints: INITIAL_EXPERIENCE_POINTS_AMOUNT,
  experienceGainRate: BASE_EXPERIENCE_GAIN_RATE,
};

export const GameStateContext = createContext(INITIAL_GAME_STATE);

const GameStateProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [experiencePoints, setExperiencePoints] = useState(
    INITIAL_GAME_STATE.experiencePoints
  );
  const [experienceGainRate, setExperienceGainRate] = useState(
    INITIAL_GAME_STATE.experienceGainRate
  );

  const gainExperience = () => {
    setExperiencePoints((prev) => prev + experienceGainRate);
  };

  const intervalId = useSetupTimer(gainExperience);

  const gameState = {
    experiencePoints,
    experienceGainRate,
    intervalId,
  };

  return (
    <GameStateContext.Provider value={gameState}>
      {children}
    </GameStateContext.Provider>
  );
};

export default GameStateProvider;
