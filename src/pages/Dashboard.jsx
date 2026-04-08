import React from "react";
import { useDeadManSwitch } from "../hooks/useDeadManSwitch";

const Dashboard = () => {
  const { timeLeft, active, resetTimer } = useDeadManSwitch(30);

  // estados visuales
  const getStatusColor = () => {
    if (!active) return "text-red-500";
    if (timeLeft <= 10) return "text-yellow-400";
    return "text-green-400";
  };

  const getProgress = () => {
    return (timeLeft / 30) * 100;
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center p-6">
      
      <div className="w-full max-w-xl">

        {/* Header */}
        <h1 className="text-3xl font-semibold mb-6 text-center">
          Dead Man's Switch
        </h1>

        {/* Card */}
        <div className="bg-gray-900 p-6 rounded-2xl shadow-xl space-y-6">

          {/* Estado */}
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Estado</span>
            <span className={`font-semibold ${getStatusColor()}`}>
              {active ? "Activo" : "Disparado"}
            </span>
          </div>

          {/* Timer grande */}
          <div className="text-center">
            <h2 className="text-5xl font-bold">
              {timeLeft}s
            </h2>
            <p className="text-gray-500 mt-2">
              tiempo restante
            </p>
          </div>

          {/* Barra de progreso */}
          <div className="w-full bg-gray-800 h-3 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 transition-all duration-1000"
              style={{ width: `${getProgress()}%` }}
            />
          </div>

          {/* Botón */}
          <button
            onClick={resetTimer}
            className="w-full bg-blue-600 hover:bg-blue-500 py-3 rounded-xl font-medium transition"
          >
            Estoy vivo
          </button>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;