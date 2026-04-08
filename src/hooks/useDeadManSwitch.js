import { useState, useEffect } from "react";

export const useDeadManSwitch = (initialTime = 60) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (!active) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [active]);

  useEffect(() => {
    if (timeLeft <= 0) {
      setActive(false);
      console.log("⚠️ Dead man's switch triggered");
    }
  }, [timeLeft]);

  const resetTimer = () => {
    setTimeLeft(initialTime);
    setActive(true);
  };

  return { timeLeft, active, resetTimer };
};