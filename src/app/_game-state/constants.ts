export const INITIAL_EXPERIENCE_POINTS_AMOUNT = 0;
export const BASE_EXPERIENCE_GAIN_RATE = 1;

enum UPGRADE_TYPES {
  BASE_RATE = "BASE_RATE",
  MULTIPLIER = "MULTIPLIER",
}

type Upgrade = {
  cost: number;
  increase: {
    amount: number;
    type: UPGRADE_TYPES;
  };
};
type Upgrades = { [index: string]: Upgrade };

export const DIGIMONEY_GAIN_UPGRADES: Upgrades = {
  lootSeller: {
    cost: 100,
    increase: {
      amount: 1,
      type: UPGRADE_TYPES.BASE_RATE,
    },
  },
  princeMamemon: {
    cost: 1000,
    increase: {
      amount: 100,
      type: UPGRADE_TYPES.BASE_RATE,
    },
  },
  billionareUsb: {
    cost: 100000,
    increase: {
      amount: 2,
      type: UPGRADE_TYPES.MULTIPLIER,
    },
  },
};

// TODO: Find xp range for digivolving in games and make upgrades a simple log growth appropriate to it
export const EXPERIENCE_GAIN_UPGRADES: Upgrades = {
  snackBar: {
    cost: 10,
    increase: {
      amount: 0.1,
      type: UPGRADE_TYPES.BASE_RATE,
    },
  },
  raceTrack: {
    cost: 100,
    increase: {
      amount: 1,
      type: UPGRADE_TYPES.BASE_RATE,
    },
  },
  weightRoom: {
    cost: 1000,
    increase: {
      amount: 8,
      type: UPGRADE_TYPES.BASE_RATE,
    },
  },
  dungeon: {
    cost: 10000,
    increase: {
      amount: 47,
      type: UPGRADE_TYPES.BASE_RATE,
    },
  },
  tacticianUsb: {
    cost: 100000,
    increase: {
      amount: 2,
      type: UPGRADE_TYPES.MULTIPLIER,
    },
  },
};
