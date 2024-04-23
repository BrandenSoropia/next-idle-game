"use client";

import { useContext } from "react";
import useInventory from "../_game-state/useInventory";
import { GameStateContext } from "../_game-state/GameState";

const Store = () => {
  const { addToInventory } = useInventory();
  const gameStateContext = useContext(GameStateContext);

  const buyItem = (upgradeName: string, cost: number) => {
    console.log("### Bought training ground");

    addToInventory(upgradeName, cost);
  };

  const digimoneyUpgrades = gameStateContext.storeOptions.digimoneyUpgrades;
  const experienceGainUpgrades =
    gameStateContext.storeOptions.experienceGainUpgrades;

  if (!gameStateContext.storeOptions) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Digimoney Upgrades</h2>

      <ul>
        {Object.keys(digimoneyUpgrades).map((upgradeName) => {
          const cost = digimoneyUpgrades[upgradeName].cost;

          return (
            <li key={upgradeName}>
              <p>{`${upgradeName} - Cost: ${cost}`}</p>
              <button
                onClick={(e) => {
                  e.preventDefault();

                  buyItem(upgradeName, cost);
                }}
              ></button>
            </li>
          );
        })}
      </ul>
      <h2>Experience Gain Upgrades</h2>

      <ul>
        {Object.keys(experienceGainUpgrades).map((upgradeName) => {
          const cost = experienceGainUpgrades[upgradeName].cost;

          return (
            <li key={upgradeName}>
              <p>{`${upgradeName} - Cost: ${cost}`}</p>
              <button
                onClick={(e) => {
                  e.preventDefault();

                  buyItem(upgradeName, cost);
                }}
              ></button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Store;
