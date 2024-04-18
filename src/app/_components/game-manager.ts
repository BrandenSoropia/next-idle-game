function calcTimeDifferenceInSeconds(start: number, current: number) {
  return Math.floor((current - start) / 1000);
}

class GameManager {
  intervalId: NodeJS.Timeout;
  startTime: number;

  resources: number;
  rate = 1;

  constructor(initialStartTime: number) {
    this.startTime = initialStartTime || Date.now();
    this.resources = 0;

    this.intervalId = setInterval(() => {
      this.incrementResources();
    }, 1000);
  }

  stopCounter() {
    console.log("### stopping the counter");
    clearInterval(this.intervalId);
  }

  incrementResources() {
    this.resources += this.rate;
  }

  getGameState() {
    return {
      resources: this.resources,
      timePlayed: calcTimeDifferenceInSeconds(this.startTime, Date.now()),
    };
  }

  printGameState() {
    console.log(this.getGameState());
  }
}

export default GameManager;
