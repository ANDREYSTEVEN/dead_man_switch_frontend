import React from "react";
import { useDeadManSwitch } from "../hooks/useDeadManSwitch";

const Dashboard = () => {
  const { timeLeft, active, resetTimer } = useDeadManSwitch(30);

  const getStatus = () => {
    if (!active) return "critical";
    if (timeLeft <= 10) return "warning";
    return "normal";
  };

  const status = getStatus();

  const getStatusColor = () => {
    switch (status) {
      case "critical":
        return "text-red-500";
      case "warning":
        return "text-yellow-400";
      default:
        return "text-green-400";
    }
  };

  const getProgress = () => {
    return (timeLeft / 30) * 100;
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center p-6">
      
      <div className="w-full max-w-xl">

        <h1 className="text-3xl font-semibold mb-6 text-center">
          Dead Man's Switch
        </h1>

        <div className={`bg-gray-900 p-6 rounded-2xl shadow-xl space-y-6
          ${status === "critical" ? "animate-pulse" : ""}
        `}>

          {/* Estado */}
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Estado</span>
            <span className={`font-semibold ${getStatusColor()}`}>
              {status === "critical" ? "DISPARADO" : status === "warning" ? "ALERTA" : "ACTIVO"}
            </span>
          </div>

          {/* Timer */}
          <div className="text-center">
            <h2 className="text-5xl font-bold">
              {timeLeft}s
            </h2>
            <p className="text-gray-500 mt-2">
              tiempo restante
            </p>
          </div>

          {/* Barra */}
          <div className="w-full bg-gray-800 h-3 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-1000
                ${status === "critical" ? "bg-red-500" :
                  status === "warning" ? "bg-yellow-400" :
                  "bg-blue-500"}
              `}
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