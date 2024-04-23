import { useState } from "react";

type Inventory = {
  [index: string]: number;
};

const useInventory = () => {
  const [inventory, setInventory] = useState<Inventory>({});

  const addToInventory = (itemName: string, quantity: number) => {
    const updatedInventory = { ...inventory };
    const itemInInventory = updatedInventory?.[itemName];

    if (itemInInventory) {
    } else {
      updatedInventory[itemName] = quantity;
    }

    setInventory(updatedInventory);
  };

  return { addToInventory };
};

export default useInventory;
