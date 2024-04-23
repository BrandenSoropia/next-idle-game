import React, {
  MutableRefObject,
  createContext,
  useMemo,
  useState,
} from "react";
import {
  BASE_DIGIMONEY_GAIN_RATE,
  BASE_EXPERIENCE_GAIN_RATE,
  DIGIMONEY_GAIN_UPGRADES,
  EXPERIENCE_GAIN_UPGRADES,
  INITIAL_DIGIMONEY_AMOUNT,
  INITIAL_EXPERIENCE_POINTS_AMOUNT,
} from "./constants";
import useSetupTimer from "./useSetupTimer";

type GameState = {
  experienceIntervalId?: MutableRefObject<NodeJS.Timeout | undefined>;
  experiencePoints: number;
  experienceGainRate: number;
  digimoneyIntervalId?: MutableRefObject<NodeJS.Timeout | undefined>;
  digimoney: number;
  digimoneyGainRate: number;
  storeOptions: {
    digimoneyUpgrades: typeof DIGIMONEY_GAIN_UPGRADES;
    experienceGainUpgrades: typeof EXPERIENCE_GAIN_UPGRADES;
  };
  gainExperience: () => void;
};

const INITIAL_GAME_STATE: GameState = {
  experienceIntervalId: undefined,
  experiencePoints: INITIAL_EXPERIENCE_POINTS_AMOUNT,
  experienceGainRate: BASE_EXPERIENCE_GAIN_RATE,
  digimoneyIntervalId: undefined,
  digimoney: INITIAL_DIGIMONEY_AMOUNT,
  digimoneyGainRate: BASE_DIGIMONEY_GAIN_RATE,
  storeOptions: {
    digimoneyUpgrades: DIGIMONEY_GAIN_UPGRADES,
    experienceGainUpgrades: EXPERIENCE_GAIN_UPGRADES,
  },
  gainExperience: () => {},
};

export const GameStateContext = createContext(INITIAL_GAME_STATE);

const GameStateProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  // Experience
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
  const experienceIntervalId = useSetupTimer(memoizedGainExperience);

  // Digimoney
  const [digimoney, setDigimoney] = useState(INITIAL_GAME_STATE.digimoney);
  const [digimoneyGainRate, setMoneyGainRate] = useState(
    INITIAL_GAME_STATE.digimoneyGainRate
  );
  const memoizedGainMoney = useMemo(() => {
    return () => {
      setDigimoney((prev) => prev + experienceGainRate);
    };
  }, [experienceGainRate]);
  const digimoneyIntervalId = useSetupTimer(memoizedGainMoney);

  const gameState = {
    experiencePoints,
    experienceGainRate,
    experienceIntervalId,
    digimoney,
    digimoneyGainRate,
    digimoneyIntervalId,
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
