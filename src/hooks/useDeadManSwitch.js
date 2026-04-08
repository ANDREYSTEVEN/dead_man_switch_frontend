import { useState, useEffect } from "react";

export const useDeadManSwitch = (initialTime = 30) => {
  const STORAGE_KEY = "deadman-timer";

  const getStoredTime = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? parseInt(saved) : initialTime;
  };

  const [timeLeft, setTimeLeft] = useState(getStoredTime);
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (!active) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [active]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, timeLeft);

    if (timeLeft <= 0) {
      setActive(false);
    }
  }, [timeLeft]);

  const resetTimer = () => {
    setTimeLeft(initialTime);
    setActive(true);
    localStorage.setItem(STORAGE_KEY, initialTime);
  };

  return { timeLeft, active, resetTimer };
};