"use client";

const Store = () => {
  const buyTrainingGround = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("### Bought training ground");
  };

  return (
    <div>
      <button onClick={buyTrainingGround}>Buy Training Ground</button>
    </div>
  );
};

export default Store;
