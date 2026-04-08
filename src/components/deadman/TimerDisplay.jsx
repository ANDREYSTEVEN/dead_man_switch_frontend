import React from "react";

const TimerDisplay = ({ timeLeft }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-xl text-center">
      <p className="text-sm text-gray-400 mb-1">
        Tiempo restante
      </p>
      <h3 className="text-2xl font-bold">
        {timeLeft}s
      </h3>
    </div>
  );
};

export default TimerDisplay;