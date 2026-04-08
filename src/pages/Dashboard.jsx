import React from "react";
import { useDeadManSwitch } from "../hooks/useDeadManSwitch";
import TimerDisplay from "../components/deadman/TimerDisplay";

const Dashboard = () => {
  const { timeLeft, resetTimer } = useDeadManSwitch(30);

  return (
    <div>
      <h1>Dead Man's Switch</h1>
      <TimerDisplay timeLeft={timeLeft} />
      <button onClick={resetTimer}>Estoy vivo</button>
    </div>
  );
};

export default Dashboard;