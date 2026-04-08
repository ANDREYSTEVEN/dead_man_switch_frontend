import React from "react";

const TimerDisplay = ({ timeLeft }) => {
  return (
    <div className="timer">
      <h2>Tiempo restante</h2>
      <p>{timeLeft}s</p>
    </div>
  );
};

export default TimerDisplay;