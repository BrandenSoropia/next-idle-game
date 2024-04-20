import { useEffect, useRef } from "react";

const useSetupTimer = (callbackEverySecond: () => void) => {
  const intervalId = useRef<NodeJS.Timeout>();

  useEffect(() => {
    intervalId.current = setInterval(() => {
      callbackEverySecond();
    }, 1000);

    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, []);

  return intervalId;
};

export default useSetupTimer;
