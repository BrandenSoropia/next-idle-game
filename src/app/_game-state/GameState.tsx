import React, {
  MutableRefObject,
  createContext,
  useMemo,
  useState,
} from "react";
import {
  BASE_EXPERIENCE_GAIN_RATE,
  DIGIMONEY_GAIN_UPGRADES,
  EXPERIENCE_GAIN_UPGRADES,
  INITIAL_EXPERIENCE_POINTS_AMOUNT,
} from "./constants";
import useSetupTimer from "./useSetupTimer";

type GameState = {
  intervalId?: MutableRefObject<NodeJS.Timeout | undefined>;
  experiencePoints: number;
  experienceGainRate: number;
  storeOptions: {
    digimoneyUpgrades: typeof DIGIMONEY_GAIN_UPGRADES;
    experienceGainUpgrades: typeof EXPERIENCE_GAIN_UPGRADES;
  };
  gainExperience: () => void;
};

const INITIAL_GAME_STATE: GameState = {
  intervalId: undefined,
  experiencePoints: INITIAL_EXPERIENCE_POINTS_AMOUNT,
  experienceGainRate: BASE_EXPERIENCE_GAIN_RATE,
  storeOptions: {
    digimoneyUpgrades: DIGIMONEY_GAIN_UPGRADES,
    experienceGainUpgrades: EXPERIENCE_GAIN_UPGRADES,
  },
  gainExperience: () => {},
};

export const GameStateContext = createContext(INITIAL_GAME_STATE);

const GameStateProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [experiencePoints, setExperiencePoints] = useState(
    INITIAL_GAME_STATE.experiencePoints
  );
  const [experienceGainRate, setExperienceGainRate] = useState(
    INITIAL_GAME_STATE.experienceGainRate
  );

  /**
   * I think memo isn't needed since experienceGainRate is
   * a comparable dependency value and should only update if
   * its value truly changes. However, I am worried the timer
   * function that uses it can "miss" an execution if it
   * were to change (thus causing the player to miss resources).
   *
   * So just in case, I figured it'd be good to memoize.
   */
  const memoizedGainExperience = useMemo(() => {
    return () => {
      setExperiencePoints((prev) => prev + experienceGainRate);
    };
  }, [experienceGainRate]);

  const intervalId = useSetupTimer(memoizedGainExperience);

  const gameState = {
    experiencePoints,
    experienceGainRate,
    intervalId,
    storeOptions: {
      digimoneyUpgrades: DIGIMONEY_GAIN_UPGRADES,
      experienceGainUpgrades: EXPERIENCE_GAIN_UPGRADES,
    },
    gainExperience: memoizedGainExperience,
  };

  return (
    <GameStateContext.Provider value={gameState}>
      {children}
    </GameStateContext.Provider>
  );
};

export default GameStateProvider;
